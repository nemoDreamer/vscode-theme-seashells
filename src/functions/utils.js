const chroma = require("chroma-js");

/**
 * @param {String} fg
 * @param {Number} ratio
 * @returns {String}
 */
const alpha = (fg, ratio) => chroma(fg).alpha(ratio).hex();

/**
 * @param {String} background
 */
const makeAlphaB =
  (background) =>
  /**
   * @param {String} fg
   * @param {Number} ratio
   * @returns {String}
   */
  (fg, ratio = 0.5) =>
    chroma.mix(background, fg, ratio, "rgb").hex();

/**
 * @param {String} bg
 * @param {String} fg
 * @param {Number} ratio
 * @returns {String}
 */
const alphaC = (bg, fg, ratio = 0.5) => chroma.mix(bg, fg, ratio, "rgb").hex();

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

const lighten = (hexColor) =>
  chroma(hexColor)
    .set("lab.l", "*1.1563045694783756")
    // .saturate(1) // <- nudge
    .hex();

const darken = (hexColor) =>
  chroma(hexColor)
    .set("lab.l", "*0.5833759597037464")
    // .desaturate(1) // <- nudge
    .hex();

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
          obj[brightName] = lighten(value);
        }
        // darken?
        if (!obj[darkName]) {
          obj[darkName] = darken(value);
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
  makeAlphaB,
  alphaC,
  invert,
  invertLuminance,
  lighten,
  darken,
  assignVariations,
  processColors,
};
