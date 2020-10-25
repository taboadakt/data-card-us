import React from "react";
import { ThemeProvider } from "emotion-theming";

const ThemeContext = React.createContext<any>({});

interface IThemeProvider {
  theme: object;
  children: React.ReactNode;
}

const ThemeProviderWrapper: React.FC<IThemeProvider> = ({
  theme: initialTheme,
  children,
}) => {
  const [theme, setTheme] = React.useState(initialTheme);

  const updateTheme = (theme: any) => {
    setTheme((prevVal) => ({ ...prevVal, ...theme }));
  };

  const context = { theme, updateTheme };

  return (
    <ThemeContext.Provider value={context}>
      <ThemeProvider theme={context.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => React.useContext(ThemeContext);

export { ThemeContext, ThemeProviderWrapper as ThemeProvider, useTheme };
