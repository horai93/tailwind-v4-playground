import betterTailwindcss from "eslint-plugin-better-tailwindcss";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  extends: [...tseslint.configs.recommended],
  plugins: {
    "better-tailwindcss": betterTailwindcss,
  },
  settings: {
    "better-tailwindcss": {
      entryPoint: "app/style.css",
    },
  },
  rules: {
    // Formatting rules
    "better-tailwindcss/enforce-consistent-class-order": "warn",
    "better-tailwindcss/enforce-consistent-line-wrapping": "off",
    "better-tailwindcss/enforce-consistent-important-position": "warn",
    "better-tailwindcss/enforce-consistent-variable-syntax": "warn",
    "better-tailwindcss/enforce-shorthand-classes": "warn",
    "better-tailwindcss/no-unnecessary-whitespace": "warn",

    // Linting rules
    "better-tailwindcss/no-duplicate-classes": "warn",
    "better-tailwindcss/no-conflicting-classes": "warn",
    "better-tailwindcss/no-restricted-classes": "off",
    "better-tailwindcss/no-unregistered-classes": "error",
    "better-tailwindcss/no-deprecated-classes": "warn",
  },
});
