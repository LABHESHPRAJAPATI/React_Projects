import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  ThemeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const Themeprovider = ThemeContext.Provider;

export default function UseTheme() {
  return useContext(ThemeContext);
}
