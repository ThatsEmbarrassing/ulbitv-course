import type { TBuildConfig } from "./types";
import {
  buildDevServer,
  buildLoaders,
  buildPlugins,
  buildResolve,
} from "./builders";

const setDevTool = (isDevelopment: boolean) => {
  return isDevelopment ? "inline-source-map" : false;
};

export const buildConfig: TBuildConfig = (props) => {
  const { paths, aliases, mode = "development", port = 8080 } = props;
  const { entries, output, htmlTemplate } = paths;

  const isDevelopment = mode === "development";

  return {
    mode,
    entry: entries,
    output: {
      filename: "js/[name].[contenthash].js",
      chunkFilename: "js/chunks/[name].[contenthash].chunk.js",
      path: output,
      clean: true,
    },
    plugins: buildPlugins({ htmlTemplate }),
    module: {
      rules: buildLoaders({ isDevelopment }),
    },
    resolve: buildResolve({ aliases }),
    devtool: setDevTool(isDevelopment),
    devServer: buildDevServer({ port, isDevelopment }),
  };
};
