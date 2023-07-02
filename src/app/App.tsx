import { Router } from "@/pages/Router";
import "./styles/index.scss";
import { Suspense } from "react";
import { useTheme } from "@/entities/ThemeProvider";

import cn from "classnames";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn("app", theme)}>
      <Suspense fallback="Loading...">
        <Router />
      </Suspense>
    </div>
  );
};
