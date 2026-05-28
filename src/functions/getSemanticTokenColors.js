const { alpha } = require("./utils");

module.exports = (type, { bg, ansi, foreground, brightForeground }) => {
  const isDark = type === "dark";
  const symbolAccent = isDark ? ansi.magenta : ansi.green;

  return {
    class: {
      foreground: symbolAccent,
    },
    comment: {
      foreground: alpha(bg.cyan, 0.4),
      italic: true,
    },
    enumMember: {
      foreground: brightForeground,
    },
    function: {
      foreground: ansi.cyan,
    },
    keyword: {
      foreground: ansi.yellow,
    },
    method: {
      foreground: ansi.cyan,
    },
    namespace: {
      foreground: brightForeground,
    },
    number: {
      foreground: ansi.cyan,
    },
    operator: {
      foreground: ansi.yellow,
    },
    parameter: {
      foreground,
      italic: true,
    },
    property: {
      foreground: ansi.magenta,
    },
    string: {
      foreground,
    },
    type: {
      foreground: symbolAccent,
    },
    variable: {
      foreground,
    },
  };
};
