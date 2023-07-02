import { lazy } from "react";

export const MainLazy = lazy(async () => {
  const { Main } = await import("./Main.page");

  return { default: Main };
});
