import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { TBuildLoader, TBuildLoaders } from "./types";

const buildTypescriptLoader: TBuildLoader = () => {
  return {
    test: /\.tsx?$/i,
    use: "ts-loader",
    exclude: /node_modules/,
  };
};

const buildCssLoader: TBuildLoader<{ isDevelopment: boolean }> = (props) => {
  const { isDevelopment } = props;

  const styleLoader = isDevelopment
    ? "style-loader"
    : MiniCssExtractPlugin.loader;

  const cssLoader = {
    loader: "css-loader",
    options: {
      modules: {
        auto: (resPath: string) => resPath.includes(".module."),
        localIdentName: isDevelopment
          ? "[path][name]__[local]"
          : "[name]__[hash:base64:8]",
      },
    },
  };

  return {
    test: /\.scss$/i,
    use: [styleLoader, cssLoader, "sass-loader"],
  };
};

export const buildLoaders: TBuildLoaders = (props) => {
  const { isDevelopment } = props;

  return [buildTypescriptLoader({}), buildCssLoader({ isDevelopment })];
};
