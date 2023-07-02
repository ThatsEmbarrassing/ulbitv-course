import { useMemo, useState } from "react";
import { useLocalStorage } from "react-use";

import type { FC, ReactNode } from "react";

import {
  LOCAL_STORAGE_THEME_KEY,
  ThemesContext,
  ThemesEnum,
} from "@/shared/model/themes";

import type { ThemesContextType } from "@/shared/model/themes";

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [value] = useLocalStorage(LOCAL_STORAGE_THEME_KEY, ThemesEnum.LIGHT);
  const [theme, setTheme] = useState<ThemesEnum>(value || ThemesEnum.LIGHT);

  const ThemeProviderValue = useMemo<ThemesContextType<ThemesEnum>>(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme]
  );

  return (
    <ThemesContext.Provider value={ThemeProviderValue}>
      {children}
    </ThemesContext.Provider>
  );
};
