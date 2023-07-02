import type { RuleSetRule } from "webpack";
import type { TOptionsType } from "./TOptionsType.type";

export type TBuildLoader<T extends TOptionsType = TOptionsType> = (
  options: TOptionsType & T
) => RuleSetRule;
