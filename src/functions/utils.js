const chroma = require("chroma-js");

const alpha = (hexColor, hexAlpha) => `${hexColor}${hexAlpha}`;

const assignVariations = (obj) => {
  Object.entries(obj)
    .filter(([key]) => !/^(bright|dark)/.test(key))
    .forEach(([key, value]) => {
      if (typeof value === "string") {
        const titleCasedName =
          key.substring(0, 1).toUpperCase() + key.substring(1);
        const brightName = `bright${titleCasedName}`;
        const darkName = `dark${titleCasedName}`;

        /* eslint-disable no-param-reassign */
        // brighten?
        if (!obj[brightName]) {
          obj[brightName] = chroma(value)
            .set("lab.l", "*1.5")
            // .saturate(1)
            .hex();
        }
        // darken?
        if (!obj[darkName]) {
          obj[darkName] = chroma(value)
            .set("lab.l", "*0.5")
            .desaturate(1)
            .hex();
        }
      } else {
        assignVariations(value);
      }
    });
};

module.exports = {
  alpha,
  assignVariations,
};
