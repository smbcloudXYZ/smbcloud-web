import nextPlugin from "eslint-config-next";

export default [
  ...nextPlugin.configs.recommended,
  ...nextPlugin.configs["core-web-vitals"],
];
