import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      // Desativa a regra 'no-unused-vars' para ignorar todas as variáveis não usadas
      "no-unused-vars": "off", // Desativa completamente a verificação de variáveis não usadas
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser, // Adiciona as variáveis globais do navegador
    },
    rules: {
      "no-unused-vars": "off", // Desativa completamente a verificação de variáveis não usadas
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "off", // Desativa completamente a verificação de variáveis não usadas
    },
  },
  {
    files: ["webpack.config.js"], // Para o arquivo webpack.config.js, adicione a configuração do ambiente Node.js
    languageOptions: {
      globals: {
        ...globals.node, // Permite o uso de variáveis do Node.js (ex: require, module, __dirname)
      },
    },
    rules: {
      "no-unused-vars": "off", // Desativa completamente a verificação de variáveis não usadas
    },
  },
]);
