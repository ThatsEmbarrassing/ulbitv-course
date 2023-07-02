import type { Configuration } from "webpack";
import type { TBuildConfigProps } from "./TBuildConfigProps.type";

export type TBuildConfig = (props: TBuildConfigProps) => Configuration;
