import React, { useState } from "react";
import styled from "styled-components";
import { NavigationBar } from "../components/organisms/Navigation/NavigationBar";
import { AppWrapper } from "./App.styles";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { ExplorePage } from "./ExplorePage/ExplorePage";

const App = () => {
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
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </AppWrapper>
    </>
  );
};

export default App;
