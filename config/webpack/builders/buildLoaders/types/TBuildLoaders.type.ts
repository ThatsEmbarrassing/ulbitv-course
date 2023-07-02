import type { ModuleOptions } from "webpack";
import type { TBuildLoadersProps } from "./TBuildLoadersProps.type";

export type TBuildLoaders = (
  props: TBuildLoadersProps
) => ModuleOptions["rules"];
