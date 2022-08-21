import React, { ReactNode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Router>
  );
};
