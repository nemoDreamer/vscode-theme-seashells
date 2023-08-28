const { processColors, invertLuminance } = require("../functions/utils");

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
    // foreground: chroma(processed.foreground).set("lch.l", "*1.5").hex(),
    // brightForeground: chroma(processed.foreground).set("lch.l", "*2.5").hex(),
  },
};
