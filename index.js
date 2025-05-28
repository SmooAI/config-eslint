import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import depend from 'eslint-plugin-depend';
import onlyWarn from 'eslint-plugin-only-warn';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
    js.configs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
    {
        plugins: {
            turbo: turboPlugin,
        },
        rules: {
            'turbo/no-undeclared-env-vars': 'warn',
            'no-unused-vars': 'off', // Turn off the base rule as it can report incorrect errors
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
        },
    },
    {
        plugins: {
            onlyWarn,
        },
    },
    {
        plugins: {
            depend,
        },
        extends: ['depend/flat/recommended'],
    },
    {
        ignores: ['dist/**'],
    },
];
