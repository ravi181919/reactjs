import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'Light',
    darkMode: () => {},
    lightMode: () => {}
})

export const ThemeContextProvider = ThemeContext.Provider

// Make a custom hook 
export default function useTheme()  {
    return useContext(ThemeContext);
}