import React, { createContext,  useState } from "react";
import  "./DarkModeToggle.css";

const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [DarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!DarkMode); 
    document.body.className = !DarkMode? "dark-mode" : "light-mode";
   
  };

  return (
    <ThemeContext.Provider value={{ DarkMode, toggleDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;