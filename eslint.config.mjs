import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["webpack.config.js"], // Adicione este bloco para configurar o ambiente específico para o Webpack
    languageOptions: {
      env: {
        node: true, // Adiciona suporte ao Node.js (para `require`, `module`, `__dirname`)
      },
    },
  },
]);
