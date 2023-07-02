export type ThemesContextType<ThemeValue extends string> = {
  theme: ThemeValue;
  setTheme: (theme: ThemeValue) => void;
};
