import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

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
    files: ["webpack.config.js"],
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
    env: {
      jest: true, // Ativa o ambiente Jest
    },
    plugins: ["jest"], // Adiciona o plugin Jest
    extends: [
      "plugin:jest/recommended", // Usa as regras recomendadas do Jest
      "plugin:jest/style", // Usa as regras de estilo do Jest (opcional)
    ],
    rules: {
      "no-unused-vars": "off", // Mantenha suas regras customizadas, se necessário
    },
  },
]);
