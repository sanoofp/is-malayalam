import pkg from "./package.json";
import del from "rollup-plugin-delete";
import dts from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.ts",
    plugins: [del({ targets: "lib" }), typescript()],
    output: [
      {
        format: "cjs",
        file: pkg.main,
      },
      {
        format: "es",
        file: pkg.module,
      },
    ],
  },
  {
    input: "src/index.ts",
    plugins: [dts()],
    output: {
      format: "es",
      file: pkg.types,
    },
  },
];
