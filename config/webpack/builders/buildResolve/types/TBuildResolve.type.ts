import type { ResolveOptions } from "webpack";
import type { TBuildResolveProps } from "./TBuildResolveProps.type";

export type TBuildResolve = (props: TBuildResolveProps) => ResolveOptions;
