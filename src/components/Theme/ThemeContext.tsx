// ThemeContext.tsx

import React from "react";

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const defaultThemeContext: ThemeContextProps = {
  theme: "clair",
  toggleTheme: () => {},
};

const ThemeContext =
  React.createContext<ThemeContextProps>(defaultThemeContext);

export default ThemeContext;
