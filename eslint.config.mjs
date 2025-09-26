import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginJest from 'eslint-plugin-jest';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js, jest: pluginJest },
    extends: ['js/recommended', 'plugin:jest/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest, // 👈 Adiciona suporte ao ambiente de testes
      },
    },
  },

  // React config continua funcionando normalmente
  pluginReact.configs.flat.recommended,
]);

