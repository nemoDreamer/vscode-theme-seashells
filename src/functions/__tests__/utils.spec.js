const seashellsDark = require("../../schemes/seashells-dark");
const {
  assignVariations,
  processColors,
  invert,
  invertLuminance,
} = require("../utils");

describe("utils", () => {
  test("assignVariations", () => {
    const scheme = {
      background: "#111111",
      foreground: "#cccccc",
      brightForeground: "white",
      ansi: {
        red: "#ff0000",
        darkRed: "darkred",
        yellow: "#ffe000",
        blue: "#0000cc",
        brightBlue: "brightblue",
      },
    };

    assignVariations(scheme);

    expect(scheme).toMatchInlineSnapshot(`
      {
        "ansi": {
          "blue": "#0000cc",
          "brightBlue": "brightblue",
          "brightRed": "#ff754c",
          "brightYellow": "#ffffa4",
          "darkBlue": "#261191",
          "darkRed": "darkred",
          "darkYellow": "#776a31",
          "red": "#ff0000",
          "yellow": "#ffe000",
        },
        "background": "#111111",
        "brightBackground": "#171717",
        "brightForeground": "white",
        "darkBackground": "#090909",
        "darkForeground": "#616161",
        "foreground": "#cccccc",
      }
    `);
  });

  const colors = {
    black: "#000",
    white: "white",
    red: "#ff0000",
    green: "#80ff80",
  };

  describe("processColors", () => {
    test("dummy", () => {
      expect(processColors(colors, () => "yo")).toMatchInlineSnapshot(`
        {
          "black": "yo",
          "green": "yo",
          "red": "yo",
          "white": "yo",
        }
      `);
    });

    test("scheme", () => {
      expect(processColors(seashellsDark.scheme, invert))
        .toMatchInlineSnapshot(`
        {
          "ansi": {
            "black": "#d5bda4",
            "blue": "#cca7a0",
            "brightBlack": "#aea69d",
            "brightBlue": "#73321c",
            "brightCyan": "#60453f",
            "brightGreen": "#816157",
            "brightMagenta": "#311a13",
            "brightRed": "#006275",
            "brightWhite": "#001a2a",
            "brightYellow": "#00274d",
            "cyan": "#7d4b3d",
            "green": "#a47052",
            "magenta": "#55210e",
            "red": "#008bc9",
            "white": "#003c5f",
            "yellow": "#0050a9",
          },
          "background": "#f7ede3",
          "bold": "#001a2b",
          "brightForeground": "#001a2a",
          "cursorText": "#0050a9",
          "foreground": "#003c5f",
          "links": "#939622",
          "selectedText": "#001a2a",
          "selection": "#c5a88b",
        }
      `);
    });
  });

  test("invert", () => {
    expect(invert("#f00")).toBe("#008fe0");
  });

  test("invertLuminance", () => {
    expect(invertLuminance("#f00")).toBe("#e90000");
  });
});
