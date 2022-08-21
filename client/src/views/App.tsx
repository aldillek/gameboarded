import React, { useState } from "react";
import styled from "styled-components";
import { NavigationBar } from "../components/organisms/Navigation/NavigationBar";
import { AppWrapper } from "./App.styles";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";

const App = () => {
  const [count, setCount] = useState(0);

  const data = [
    {
      name: "Adam",
      age: 28,
      group: "Sem I / Group B",
    },
    {
      name: "Roman",
      age: 30,
      group: "Sem III / Group C",
    },
    {
      name: "Ania",
      age: 27,
      group: "Sem I / Group A",
    },
    {
      name: "Karol",
      age: 31,
      group: "Sem IV / Group A",
    },
  ];

  const StyledDiv = styled.div`
    background-color: ${({ theme }) => theme.colors.red};
    border: 1px solid white;
    border-radius: 16px;
  `;

  return (
    <>
      <AppWrapper>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/forum"
            element={
              <>
                <h1>tsdfsdf</h1>
              </>
            }
          />
        </Routes>
      </AppWrapper>
    </>
  );
};

export default App;
