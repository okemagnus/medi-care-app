// import React, { createContext, useState, useContext } from 'react'

// const ThemeContext = createContext()

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light')

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
//   }

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className={`theme-${theme}`}>{children}</div>
//     </ThemeContext.Provider>
//   )
// }

// export const useTheme = () => useContext(ThemeContext)

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
