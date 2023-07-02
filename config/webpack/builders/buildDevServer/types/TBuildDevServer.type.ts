import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { TBuildDevServerProps } from "./TBuildDevServerProps.type";

export type TBuildDevServer = (
  props: TBuildDevServerProps
) => DevServerConfiguration | undefined;
