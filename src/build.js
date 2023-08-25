#! /usr/bin/env node

const chokidar = require("chokidar");
const fresh = require("fresh-require");
const fs = require("fs");
const log = require("npmlog");
const path = require("path");
const yargs = require("yargs");

// Theme configs
const themeConfigs = {
  dark: {
    name: "SeaShells (Dark)",
    type: "dark",
    scheme: "./schemes/seashells-dark",
  },
};

// ---

const args = yargs
  .option("watch", {
    alias: "w",
    description: "Re-build on file changes.",
    type: "boolean",
    default: false,
  })
  .option("log-level", {
    alias: "l",
    type: "string",
    choices: ["info", "verbose", "warn", "error", "silent"],
    default: "info",
  })
  .help()
  .alias("h", "help").argv;

// ---

log.heading = "build";
log.level = args.logLevel;

const ROOT = path.resolve(__dirname, "..");
const relative = (to) => `./${path.relative(ROOT, to)}`;

// ---

const build = () => {
  Object.entries(themeConfigs).forEach(([themeId, themeConfig]) => {
    log.info("Processing theme id:", themeId);

    // refresh imports (because of watch-mode)
    const scheme = fresh(themeConfig.path, require);
    const makeColorTheme = fresh("./functions/makeColorTheme", require);

    const theme = makeColorTheme({
      ...themeConfig,
      scheme,
    });

    const json = JSON.stringify(theme, null, 2);

    const filename = `seashells-${themeId}-color-theme.json`;
    const filepath = path.resolve(ROOT, "themes", filename);

    fs.writeFileSync(filepath, json);

    log.verbose("Wrote file", relative(filepath));
  });

  log.info("👍 Done!");
};

if (args.watch) {
  const files = path.resolve(ROOT, "src");

  log.info("Watching files", relative(files));

  chokidar
    .watch(files, {
      ignoreInitial: true,
    })
    .on("all", build);
} else {
  build();
}
