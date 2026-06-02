const {
  processColors,
  invertLuminance,
  lighten,
  darken,
} = require("../functions/utils");

const dark = require("./seashells-dark");

/** @type {import('./seashells-dark').scheme} */
const processed = processColors(dark.scheme, invertLuminance);

module.exports = {
  id: "light",
  name: "SeaShells (Light)",
  type: "light",
  scheme: {
    ...processed,

    // preserve ANSI colors:
    ansi: dark.scheme.ansi,
    // TODO:
    // - change ansi.black to more saturated

    // nudge foreground colors:
    foreground: lighten(processed.foreground, 1.5),
    brightForeground: darken(processed.foreground, 0.25),
  },
};
