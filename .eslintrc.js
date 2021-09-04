module.exports = {
  extends: ["sarpik"],
  rules: {
    "no-param-reassign": 0,
    "react/display-name": "off",
    "no-unused-expressions": 0,
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    indent: 0,
    "react/destructuring-assignment": 0,
  },
};
