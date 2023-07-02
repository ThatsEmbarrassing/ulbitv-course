import { lazy } from "react";

export const LayoutLazy = lazy(async () => {
  const { Layout } = await import("./Layout.component");
  return { default: Layout };
});
