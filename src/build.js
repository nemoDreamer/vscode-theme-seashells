#! /usr/bin/env node

const fs = require("fs");
const log = require("npmlog");
const path = require("path");
const yargs = require("yargs");

const makeColorTheme = require("./functions/makeColorTheme");

const darkScheme = require("./schemes/seashells-dark");

// Schemes
const schemes = [darkScheme];

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
  schemes.forEach((scheme) => {
    log.info("Processing theme id:", scheme.id);

    const theme = makeColorTheme(scheme);
    const json = JSON.stringify(theme, null, 2);

    const filename = `seashells-${scheme.id}-color-theme.json`;
    const filepath = path.resolve(ROOT, "themes", filename);

    fs.writeFileSync(filepath, json);

    log.verbose("Wrote file", relative(filepath));
  });

  log.info("👍 Done!");
})();
