import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const value = { primary: "blue", secondary: "yellow" };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
