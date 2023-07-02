// const { resolve } = require("path");
// const HTMLWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

import { resolve } from "path";

import { buildConfig } from "./config/webpack";

import type { EnvType } from "./config/webpack";

const setup = (env: Partial<EnvType>) => {
  const { port = "8080", mode = "development" } = env;

  return buildConfig({
    paths: {
      entries: {
        index: resolve(__dirname, "src", "index.tsx"),
        "lib/react": ["react", "react-dom", "react-router-dom"],
      },
      output: resolve(__dirname, "dist"),
      htmlTemplate: resolve(__dirname, "public", "template.html"),
    },
    mode,
    aliases: {
      "@": resolve(__dirname, "src"),
    },
    port: Number(port),
  });
};

export default setup;
