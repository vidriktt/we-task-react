import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		languageOptions: {
			sourceType: 'module',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			'no-unused-vars': 'error',
			'react/prop-types': 'off',
		},
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat['jsx-runtime'],
];
