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

// --------------------------------------------------
// Scheme helpers
// --------------------------------------------------

const addVariations = (obj) =>
  Object.entries(obj).reduce((prev, [key, value]) => {
    if (typeof value === "string") {
      if (/^(bright|dark)/.test(key)) {
        return {
          ...prev,
          [key]: value,
        };
      }

      const titleCasedName =
        key.substring(0, 1).toUpperCase() + key.substring(1);
      const brightName = `bright${titleCasedName}`;
      const darkName = `dark${titleCasedName}`;

      return {
        ...prev,
        [key]: value,
        [brightName]: obj[brightName] || lighten(value),
        [darkName]: obj[darkName] || darken(value),
      };
    }

    return {
      ...prev,
      [key]: addVariations(value),
    };
  }, {});

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

const prepareScheme = (scheme) => {
  const withVariations = addVariations(scheme);

  return {
    ...withVariations,
    // NOTE: store a separate copy of ANSI. (This will get processed, leaving the
    // originals untouched if needed)
    bg: withVariations.ansi,
  };
};

module.exports = {
  alpha,
  makeAlphaB,
  alphaC,
  invert,
  invertLuminance,
  lighten,
  darken,
  // ---
  addVariations,
  processColors,
  prepareScheme,
};
