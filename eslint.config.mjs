import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      "no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": "off",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "off",
    },
  },
  {
    files: ["webpack.config.js", "babel.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "off",
    },
  },
  {
    files: ["**/__tests__/**/*.js", "**/*.test.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest,
    },
    rules: {
      "no-unused-vars": "off",
      ...jest.configs.recommended.rules,
      ...jest.configs.style.rules,
    },
  },
]);
