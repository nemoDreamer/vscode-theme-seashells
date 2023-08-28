const chroma = require("chroma-js");

/**
 * @param {String} hexColor
 * @param {String} hexAlpha
 * @returns {String}
 */
const alpha = (hexColor, hexAlpha) => `${hexColor}${hexAlpha}`;

/**
 * @param {String} hexColor
 * @returns {String}
 */
const invert = (hexColor) => {
  const [l, c, h] = chroma(hexColor).lch();
  return chroma.lch([100 - l, c, (h + 180) % 360]).hex();
};

/**
 * @param {String} hexColor
 * @returns {String}
 */
const invertLuminance = (hexColor) => {
  const [l, c, h] = chroma(hexColor).lch();
  return chroma.lch([100 - l, c, h]).hex();
};

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

/**
 * @param {String|Object} scheme
 * @returns {String|Object}
 */
const processColors = (scheme, callback) => {
  if (typeof scheme === "string") {
    return callback(scheme);
  }

  return Object.entries(scheme).reduce(
    (prev, [key, value]) => ({
      ...prev,
      [key]: processColors(value, callback),
    }),
    {}
  );
};

module.exports = {
  alpha,
  invert,
  invertLuminance,
  assignVariations,
  processColors,
};
