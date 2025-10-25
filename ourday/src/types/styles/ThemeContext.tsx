import React, { createContext, useContext, useState } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  colors: typeof lightColors;
}

const lightColors = {
  primary: '#9B7EDE',
  secondary: '#7ED9DE',
  background: '#F8F7F4',
  surface: '#FFFFFF',
  accent: '#FFB7B2',
  text: '#333333',
  textSecondary: '#666666',
  border: '#E8E6E1',
};

const darkColors = {
  primary: '#B19CD9',
  secondary: '#8CD9DE',
  background: '#2D2B28',
  surface: '#3A3734',
  accent: '#FF9C96',
  text: '#FFFFFF',
  textSecondary: '#CCCCCC',
  border: '#4A4744',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(function (prev: string) {
            return prev === 'light' ? 'dark' : 'light';
        });
  };

  const colors = theme === 'light' ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};