import { ProgressPlugin } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import type { TBuildPlugins } from "./types";

export const buildPlugins: TBuildPlugins = (props) => {
  const { htmlTemplate } = props;

  return [
    new HTMLWebpackPlugin({
      template: htmlTemplate,
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/chunks/[name].[contenthash:8].css"
    }),
  ];
};
