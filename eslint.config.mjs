import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 禁用未使用變量的規則，或將其降級為警告
      "@typescript-eslint/no-unused-vars": "warn", // 可以改為 "warn" 以顯示警告而非錯誤

      // 允許使用 any 類型
      "@typescript-eslint/no-explicit-any": "off",
       "@typescript-eslint/ban-ts-comment": "off"
    },
  },
];
export default eslintConfig;
