import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
// import { terser } from "rollup-plugin-terser";
import { babel } from '@rollup/plugin-babel';

const pkg = require("./package.json");

export default {
  input: "src/index.tsx",
  output: [
    {
      name: "_",
      file: pkg.main,
      format: "umd",
      globals: {
        react: 'React'
      }
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: ['react'],
  // terser(),
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    babel({ babelHelpers: 'bundled' }),
    resolve(),
    commonjs(),
  ],
};
