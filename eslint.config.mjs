import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser, // Adiciona as variáveis globais do navegador
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["webpack.config.js"], // Para o arquivo webpack.config.js, adicione a configuração do ambiente Node.js
    languageOptions: {
      globals: {
        ...globals.node, // Permite o uso de variáveis do Node.js (ex: require, module, __dirname)
      },
    },
  },
]);
