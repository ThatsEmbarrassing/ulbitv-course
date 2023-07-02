import type { Configuration } from "webpack";
import type { TBuildPluginsProps } from "./TBuildPluginsProps.type";

export type TBuildPlugins = (
  props: TBuildPluginsProps
) => Configuration["plugins"];
