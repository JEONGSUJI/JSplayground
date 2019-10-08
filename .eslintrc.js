module.exports = {
  "parserOptions": {
    "ecmaVersion": 9
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "jquery": true
  },
  "extends": "airbnb-base",
  "plugins": [ "import", "html" ],
  "rules": {
    // "off" or 0 - turn the rule off
    // "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
    // "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
    "no-console": "warn",
    "quotes": [ "error", "single" ],
    "no-underscore-dangle": "warn",
    "no-plusplus": [ "error", { "allowForLoopAfterthoughts": true }],
    "comma-dangle": [ "error", "never"],
    "no-console" : "off",
    "no-var" : 0, // 0: off 1: warn 2: error
    "eol-last" : 0,
    "space-before-blocks" : 0,
    "no-plusplus" : 0,
    "vars-on-top" : 0,
    "block-scoped-var" : 0,
    "no-redeclare" : 0,
    "curly" : 0,
    "nonblock-statement-body-position" : 0
  }
 };