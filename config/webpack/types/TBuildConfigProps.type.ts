import type { ResolveOptions } from "webpack";
import type { TConfigPaths } from "./TConfigPaths.type";

export type TBuildConfigProps = {
  paths: TConfigPaths;
  port?: number;
  mode?: "development" | "production";
  aliases?: ResolveOptions["alias"];
};
