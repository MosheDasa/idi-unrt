import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import html from "@rollup/plugin-html";
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { resolve as pathResolve } from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const template = () => {
  return readFileSync(pathResolve(__dirname, "src/index.html"), "utf-8");
};

const isDev = process.env.NODE_ENV === "development";

export default {
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "iife",
    sourcemap: true,
    globals: {
      process: "process",
    },
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      config: {
        path: "../unrt/postcss.config.js",
      },
      extensions: [".css"],
      extract: false,
      modules: false,
      minimize: !isDev,
      inject: true,
    }),
    typescript({ tsconfig: "./tsconfig.json" }),
    html({ template }),
    isDev &&
      serve({
        open: true,
        port: 3000,
        contentBase: "dist",
      }),
    isDev && livereload("dist"),
  ].filter(Boolean),
  onwarn(warning, warn) {
    if (warning.code === "THIS_IS_UNDEFINED") return;
    warn(warning);
  },
};
