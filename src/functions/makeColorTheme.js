const getUIColors = require("./getUIColors");
const getTokenColors = require("./getTokenColors");
const getSemanticTokenColors = require("./getSemanticTokenColors");

/**
 *
 * @param {import("../schemes/seashells-dark.js")} config
 * @returns
 */
module.exports = ({ name, type, scheme }) => ({
  name,
  type,
  $schema: "vscode://schemas/color-theme",
  semanticHighlighting: true,
  // ---
  colors: getUIColors(type, scheme),
  tokenColors: getTokenColors(type, scheme),
  semanticTokenColors: getSemanticTokenColors(type, scheme),
});
