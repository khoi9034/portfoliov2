import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", ".vercel/**", "node_modules/**", "out/**", "build/**"]
  },
  ...coreWebVitals,
  ...nextTypescript
];

export default eslintConfig;
