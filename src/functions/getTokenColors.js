const { alpha } = require("./utils");

/*
TODO:
- [x] less yellow, more white
- [x] better strings
*/

module.exports = ({
  ansi,
  foreground,
  // background,
}) => [
  { scope: "string", settings: { foreground: ansi.green } },
  { scope: "string.quoted", settings: { foreground } },
  {
    scope: "string.template",
    settings: { foreground: ansi.green },
  },
  {
    scope: "string.template punctuation",
    settings: { foreground: ansi.cyan },
  },
  {
    scope: "constant.language",
    settings: { foreground: ansi.yellow, fontStyle: "italic" },
  },
  { scope: "constant.numeric", settings: { foreground: ansi.cyan } },
  {
    scope: "constant.language.json, constant.language.import-export-all",
    settings: { foreground: ansi.green },
  },
  { scope: "support.class", settings: { foreground: ansi.cyan } },
  { scope: "support.variable, support.constant", settings: { foreground } },
  {
    scope: "variable, meta.definition.variable entity.name.function",
    settings: { foreground },
  },
  { scope: "variable.parameter", settings: { fontStyle: "italic" } },
  {
    scope: "variable.object.property, variable.other.object.property",
    settings: { foreground: ansi.green },
  },
  {
    scope: "support.variable.property, variable.other.property",
    settings: { foreground: ansi.magenta },
  },
  { scope: "variable.language.this", settings: { fontStyle: "italic" } },
  {
    scope: "modifier, support.type.object",
    settings: { foreground: ansi.green },
  },
  { scope: "keyword", settings: { foreground: ansi.yellow } },
  {
    scope:
      "keyword.control.loop, keyword.control.conditional, keyword.control.trycatch",
    settings: { foreground: ansi.yellow },
  },
  {
    scope:
      "keyword.control.import, keyword.control.from, keyword.control.export, keyword.control.default",
    settings: { fontStyle: "italic" },
  },
  {
    scope: "keyword.control.flow",
    settings: { foreground: ansi.magenta, fontStyle: "italic" },
  },
  {
    scope: "entity.name.function, support.function",
    settings: { foreground: ansi.cyan },
  },
  {
    scope: "new.expr entity.name.function",
    settings: { foreground: ansi.brightWhite, fontStyle: "bold" },
  },
  {
    scope: "storage.type, storage.modifier",
    settings: { foreground: ansi.green, fontStyle: "italic" },
  },
  {
    scope: "support.module, support.node",
    settings: { foreground, fontStyle: "italic" },
  },
  { scope: "support.type", settings: { foreground: ansi.magenta } },
  {
    scope: "entity.name.type, entity.other.inherited-class",
    settings: { foreground: ansi.brightWhite /* ansi.magenta */ },
  },
  {
    scope: "comment",
    settings: { foreground: alpha(ansi.cyan, "70"), fontStyle: "italic" },
  },
  { scope: "entity.name.type.class", settings: { foreground: ansi.magenta } },
  {
    scope: "meta.definition.method entity.name.function",
    settings: { foreground: ansi.cyan },
  },
  {
    scope: "meta.function entity.name.function",
    settings: { foreground: ansi.cyan },
  },
  {
    scope: "template.expression.begin, template.expression.end",
    settings: { foreground: ansi.green },
  },
  { scope: "entity.name.tag.yaml", settings: { foreground: ansi.magenta } },
  {
    scope:
      "meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json",
    settings: { foreground: ansi.cyan, fontStyle: "italic" },
  },
  {
    scope: "entity.other.attribute-name.class",
    settings: { foreground: ansi.green },
  },
  {
    scope: "entity.other.attribute-name.id",
    settings: { foreground: ansi.cyan },
  },
  { scope: "source.css", settings: { foreground: ansi.yellow } },
  {
    scope: "meta.tag, punctuation.definition.tag",
    settings: { foreground: ansi.green },
  },
  { scope: "entity.name.tag", settings: { foreground: ansi.cyan } },
  {
    scope: "entity.other.attribute-name",
    settings: { foreground: ansi.yellow },
  },
  { scope: "markup.heading", settings: { foreground: ansi.green } },
  {
    scope: "text.html.markdown meta.link.inline, meta.link.reference",
    settings: { foreground },
  },
  {
    scope: "text.html.markdown beginning.punctuation.definition.list",
    settings: { foreground: ansi.green },
  },
  {
    scope: "markup.italic",
    settings: { foreground: ansi.brightBlack, fontStyle: "italic" },
  },
  {
    scope: "markup.bold",
    settings: { foreground: ansi.brightWhite, fontStyle: "bold" },
  },
  {
    scope: "markup.bold markup.italic, markup.italic markup.bold",
    settings: { foreground: ansi.brightWhite },
  },
  { scope: "keyword.other.definition.ini", settings: { foreground } },
  {
    scope: "entity.name.section.group-title.ini",
    settings: { foreground: ansi.green },
  },
  { scope: "punctuation.definition.tag", settings: { foreground: ansi.cyan } },
  {
    scope:
      "storage.modifier.ts, entity.name.type.module.ts, support.type.primitive.ts",
    settings: { foreground: ansi.cyan },
  },
  {
    scope: "entity.name.type.instance.jsdoc",
    settings: { foreground: ansi.cyan },
  },
  {
    scope: "punctuation.separator.parameter",
    settings: { foreground: alpha(ansi.cyan, "70") },
  },
  {
    scope:
      "meta.brace, punctuation.definition.parameters, punctuation.definition.block, punctuation.terminator.statement, punctuation.separator.comma, punctuation.section.embedded",
    settings: { foreground: alpha(ansi.cyan, "70") },
  },
  { scope: "token.info-token", settings: { foreground: ansi.blue } },
  { scope: "token.warn-token", settings: { foreground: ansi.yellow } },
  { scope: "token.error-token", settings: { foreground: ansi.red } },
  { scope: "token.debug-token", settings: { foreground: ansi.green } },
];
