import type { ValuesType } from "utility-types";
import type { Configuration } from "webpack";

export type TConfigPaths = {
  entries: ValuesType<Required<Pick<Configuration, "entry">>>;
  output: string;
  htmlTemplate: string;
};
