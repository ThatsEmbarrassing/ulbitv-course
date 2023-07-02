import type { TBuildResolve } from "./types";

export const buildResolve: TBuildResolve = (props) => {
  const { aliases } = props;

  return {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: aliases,
  };
};
