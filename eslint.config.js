const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    files: ["eslint.config.js", "test/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: globals.node
    }
  },
  {
    files: ["script.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      // Runs as a browser script, but feature-detects `module`/`require`
      // (UMD-style) so its pure logic can also be `require()`d from tests.
      globals: Object.assign({}, globals.browser, globals.node)
    },
    rules: {
      "no-unused-vars": ["error", { args: "none", caughtErrors: "none" }]
    }
  },
  {
    files: ["batch.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      // Browser-only, unlike script.js - no module.exports/require() side,
      // so no need for Node's globals too. `ClearTXT` comes from script.js,
      // loaded as a plain <script> before this file on batch.html.
      globals: Object.assign({ ClearTXT: "readonly" }, globals.browser)
    }
  }
];
