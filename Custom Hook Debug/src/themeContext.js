import { createContext, useContext, useState } from "react";

export const themeContext = createContext();

// debug the below custom hook
export const getThemeValue = () => {
  const value = useContext(themeContext);
  return value;
};
// debug the below context Provider
export const ThemeContextProvider = () => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}></themeContext.Provider>
  );
};
