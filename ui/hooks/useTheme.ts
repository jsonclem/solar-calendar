import { useCallback } from "react";
import { themes, ThemeType } from "../utils/themes";
import { twColors } from "../utils/styles";

export const useTheme = (defaultThemeName?: string) => {
  const updateTheme = useCallback(
    (name: string) => {
      const theme: ThemeType = themes[name || defaultThemeName || "default"];

      Object.entries(theme).forEach(([variableName, value]) => {
        const color = twColors[value]?.rgb?.join(" ");
        document.documentElement.style.setProperty(variableName, color);
      });
    },
    [defaultThemeName]
  );

  return { updateTheme };
};
