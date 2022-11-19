import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { theme } from "../assets/styles/theme";
import { store } from "../store";
export const AppProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Router>
    </Provider>
  );
};
