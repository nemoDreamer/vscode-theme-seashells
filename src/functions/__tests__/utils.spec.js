const { assignVariations } = require("../utils");

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
});
