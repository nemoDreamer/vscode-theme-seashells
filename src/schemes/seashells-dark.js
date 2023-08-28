// From https://github.com/lysyi3m/macos-terminal-themes/blob/master/schemes/SeaShells.terminal via https://github.com/mbadolato/iTerm2-Color-Schemes/blob/master/xrdb/SeaShells.xrdb

module.exports = {
  id: "dark",
  name: "SeaShells (Dark)",
  type: "dark",
  scheme: {
    ansi: {
      black: "#17384c",
      red: "#d15123",
      green: "#027c9b",
      yellow: "#fca02f",
      blue: "#1e4950",
      magenta: "#68d4f1",
      cyan: "#50a3b5",
      white: "#deb88d",
      brightBlack: "#434b53",
      brightRed: "#d48678",
      brightGreen: "#628d98",
      brightYellow: "#fdd39f",
      brightBlue: "#1bbcdd",
      brightMagenta: "#bbe3ee",
      brightCyan: "#87acb4",
      brightWhite: "#fee4ce",
    },

    background: "#0c1923", // <- native. original: "#09141b"
    foreground: "#deb88d", // <- same as `ansi.white`, ...
    brightForeground: "#fee4ce", // <- ...so taken from `ansi.brightWhite`

    bold: "#ffe4cc",
    links: "#005cbb", // <- iTerm only

    cursorText: "#fca02f",

    selection: "#1e4962",
    selectedText: "#fee4ce",
  },
};
