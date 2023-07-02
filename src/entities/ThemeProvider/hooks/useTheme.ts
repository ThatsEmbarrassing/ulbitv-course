import { useCallback } from "react";

import { useSafeContext } from "react-safe-context-hooks";
import { useLocalStorage } from "react-use";

import {
  LOCAL_STORAGE_THEME_KEY,
  ThemesContext,
  ThemesEnum,
} from "@/shared/model/themes";

interface UseThemeResult<ThemeType extends string> {
  theme: ThemeType;
  toggleTheme: () => void;
}

type TUseTheme = () => UseThemeResult<ThemesEnum>;

export const useTheme: TUseTheme = () => {
  const { theme, setTheme } = useSafeContext(ThemesContext);
  const [, setValue] = useLocalStorage(
    LOCAL_STORAGE_THEME_KEY,
    ThemesEnum.LIGHT
  );

  const toggleTheme = useCallback(() => {
    const newTheme =
      theme === ThemesEnum.LIGHT ? ThemesEnum.DARK : ThemesEnum.LIGHT;
    setTheme(newTheme);
    setValue(newTheme);
  }, [theme, setTheme]);

  return {
    theme,
    toggleTheme,
  };
};
