#! /usr/bin/env node

const fs = require("fs");
const log = require("npmlog");
const path = require("path");
const yargs = require("yargs");

const makeColorTheme = require("./functions/makeColorTheme");

const seashellsLight = require("./schemes/seashells-light");
const seashellsDark = require("./schemes/seashells-dark");

// Schemes
const schemes = [seashellsLight, seashellsDark];

// ---

const args = yargs
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

(() => {
  // Schemes
  schemes.forEach((scheme) => {
    log.info("Processing theme id:", scheme.id);

    const theme = makeColorTheme(scheme);
    const json = `${JSON.stringify(theme, null, 2)}\n`;

    const filename = `seashells-${scheme.id}-color-theme.json`;
    const filepath = path.resolve(ROOT, "themes", filename);

    fs.writeFileSync(filepath, json);

    log.verbose("Wrote file", relative(filepath));
  });

  // Icon
  const iconFilename = "icon.png";
  const iconSrc = path.resolve(ROOT, `src/assets/icon-assets/${iconFilename}`);
  const iconDest = path.resolve(ROOT, iconFilename);

  fs.copyFileSync(iconSrc, iconDest);

  log.info("Copied file", relative(iconDest));

  log.info("👍 Done!");
})();
