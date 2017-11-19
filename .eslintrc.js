module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/react"
  ],
  "settings": {
    "import/resolver": {
        "node": {
          "extensions": [
            ".js",
            ".jsx"
          ]
        }
      }
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 8
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "jsx-quotes": [2, "prefer-single"],
    "react/prop-types": 0,
    "no-console": 0
  },
  "plugins": [
    "react",
    "import",
    "jsx-a11y",
    "jest"
  ],
  "overrides": [
    {
      files: ["*.config.js", "server/*", "server.js"],
      "env": {
        "node": true,
        "browser": false
      }
    }
  ]
};
