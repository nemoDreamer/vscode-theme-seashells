const getUIColors = require("./getUIColors");
const getTokenColors = require("./getTokenColors");

/**
 *
 * @param {import("../schemes/seashells-dark.js")} config
 * @returns
 */
module.exports = ({ name, type, scheme }) => ({
  name,
  type,
  $schema: "vscode://schemas/color-theme",
  // ---
  colors: getUIColors(scheme),
  tokenColors: getTokenColors(scheme),
});
