import type { TBuildDevServer } from "./types";

export const buildDevServer: TBuildDevServer = (props) => {
  const { port, isDevelopment } = props;

  if (!isDevelopment) return;

  return {
    open: true,
    hot: true,
    historyApiFallback: true,
    port,
  };
};
