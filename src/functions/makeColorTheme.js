const getUIColors = require("./getUIColors");
const getTokenColors = require("./getTokenColors");
const { assignVariations } = require("./utils");

/**
 *
 * @param {import("../schemes/seashells-dark.js")} config
 * @returns
 */
module.exports = ({ name, type, scheme }) => {
  assignVariations(scheme);

  return {
    name,
    type,
    $schema: "vscode://schemas/color-theme",
    // ---
    colors: getUIColors(scheme),
    tokenColors: getTokenColors(scheme),
  };
};
