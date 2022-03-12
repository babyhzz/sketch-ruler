import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from "rollup-plugin-typescript2";
// import { terser } from "rollup-plugin-terser";
import { babel } from '@rollup/plugin-babel';

const pkg = require("./package.json");

export default {
  input: "src/index.js",
  output: [
    {
      name: "_",
      file: pkg.main,
      format: "umd",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],

  // terser(),
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    resolve(),
    commonjs(),
    // typescript({ useTsconfigDeclarationDir: true }),
  ],
};
