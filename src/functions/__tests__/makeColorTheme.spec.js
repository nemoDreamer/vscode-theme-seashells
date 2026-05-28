const makeColorTheme = require("../makeColorTheme");
const seashellsDark = require("../../schemes/seashells-dark");

describe("makeColorTheme", () => {
  test("includes semantic token colors", () => {
    const theme = makeColorTheme(seashellsDark);

    expect(theme.semanticTokenColors).toEqual(
      expect.objectContaining({
        comment: expect.objectContaining({
          foreground: "#50a3b566",
          italic: true,
        }),
        function: expect.objectContaining({
          foreground: "#50a3b5",
        }),
        keyword: expect.objectContaining({
          foreground: "#fca02f",
        }),
        string: expect.objectContaining({
          foreground: "#deb88d",
        }),
      }),
    );
  });
});
