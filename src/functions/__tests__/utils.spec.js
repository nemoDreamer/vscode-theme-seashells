// const chroma = require("chroma-js");

const seashellsDark = require("../../schemes/seashells-dark");
const {
  assignVariations,
  processColors,
  invert,
  invertLuminance,
  darken,
  lighten,
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
          "brightRed": "#ff371c",
          "brightYellow": "#ffff47",
          "darkBlue": "#0000af",
          "darkRed": "darkred",
          "darkYellow": "#8e7d00",
          "red": "#ff0000",
          "yellow": "#ffe000",
        },
        "background": "#111111",
        "brightBackground": "#131313",
        "brightForeground": "white",
        "darkBackground": "#0b0b0b",
        "darkForeground": "#727272",
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
          "background": "#f3e6d7",
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

  test("lighten", () => {
    expect(lighten("#e0c5a3")).toMatchInlineSnapshot(`"#ffe9c5"`);
  });

  test("darken", () => {
    expect(darken("#e0c5a3")).toMatchInlineSnapshot(`"#836c4e"`);
  });

  // test.skip("true seashells theme deltas", () => {
  //   const muted = chroma("#747063").get("lch.l");
  //   const normal = chroma("#E0C5A3").get("lch.l");
  //   const bright = chroma("#FBEADA").get("lch.l");

  //   expect(muted / normal).toMatchInlineSnapshot(`0.5833759597037464`);
  //   expect(bright / normal).toMatchInlineSnapshot(`1.1563045694783756`);
  // });
});
