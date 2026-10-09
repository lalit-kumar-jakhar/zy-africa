import nextConfig from "eslint-config-next";

const eslintConfig = [{ ignores: ["public/**"] }, ...nextConfig];

export default eslintConfig;
