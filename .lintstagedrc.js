module.exports = {
  "package.json": "sort-package-json",
  "**/*": "prettier --write --ignore-unknown",
  "**/*.js": "eslint",
};
