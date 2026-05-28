const getTokenColors = require("../getTokenColors");
const seashellsDark = require("../../schemes/seashells-dark");

const scopedEntries = (styles) =>
  styles.map((entry) => entry.scope).filter(Boolean);

describe("getTokenColors", () => {
  test.skip("removes semantic token overlaps", () => {
    const styles = getTokenColors("dark", seashellsDark.scheme);
    const scopes = scopedEntries(styles);

    expect(scopes).not.toContain("string");
    expect(scopes).not.toContain("comment");
    expect(scopes).not.toContain("keyword");
    expect(scopes).not.toContain("entity.name.function, support.function");
    expect(scopes).not.toContain("support.type");
    expect(scopes).not.toContain("support.variable");
    expect(scopes).not.toContain("variable");
    expect(scopes).not.toContain("support.class");
    expect(scopes).not.toContain("constant.numeric");
    expect(scopes).not.toContain("constant.language");
    expect(scopes).not.toContain(
      "support.variable.property, variable.other.property",
    );
    expect(scopes).not.toContain("entity.name.type.class");
    expect(scopes).not.toContain("variable.parameter");
    expect(scopes).not.toContain(
      "variable.object.property, meta.field.declaration string, variable.other.object.property",
    );
  });
});
