import { createContext } from "react";

import type { ThemesContextType } from "./types";
import { ThemesEnum } from "./ThemesEnum";

export const ThemesContext =
  createContext<ThemesContextType<ThemesEnum> | null>(null);
