module.exports = (type, { ansi, foreground, brightForeground }) => {
  const isDark = type === "dark";
  const symbolAccent = isDark ? ansi.magenta : ansi.green;

  return {
    class: symbolAccent,
    enumMember: brightForeground,
    function: ansi.cyan,
    method: ansi.cyan,
    namespace: brightForeground,
    number: ansi.cyan,
    operator: ansi.yellow,
    parameter: {
      foreground,
      italic: true,
    },
    property: symbolAccent,
    string: foreground,
    type: symbolAccent,
    variable: foreground,

    // modifiers:
    "*.readonly": brightForeground,
    // - specific
    "property.declaration": ansi.green,
    "class.defaultLibrary": symbolAccent,
    "variable.defaultLibrary": symbolAccent,
    "type.defaultLibrary": symbolAccent,
  };
};
