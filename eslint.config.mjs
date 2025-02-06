import path from "node:path";
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	includeIgnoreFile(gitignorePath),
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		ignores: ["cypress/*", "*.config.{js,cjs,mjs}"],
		rules: {
			"@typescript-eslint/ban-ts-ignore": "off",
			"@typescript-eslint/ban-ts-comment": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-unused-expressions": "off",
			"react/no-unescaped-entities": "off",
			"react/display-name": "off",
			"import/extensions": "off",
			"react/react-in-jsx-scope": "off",
		},
	},
];

export default eslintConfig;
