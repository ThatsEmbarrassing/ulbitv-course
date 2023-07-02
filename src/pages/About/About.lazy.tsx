import { lazy } from "react";

export const AboutLazy = lazy(async () => {
  const { About } = await import("./About.page");

  return { default: About };
});
