import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Default = dark (first impression is dark)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('sm-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sm-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
