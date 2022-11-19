import React from "react";
import styled from "styled-components";
import image from "../../assets/images/landing-page-background.png";
import { LandingPageTitle } from "../../components/molecules/LandingPageTtitle/LandingPageTitle";

const LandingPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-image: url(${image});
  background-size: cover;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <LandingPageTitle></LandingPageTitle>
    </LandingPageWrapper>
  );
};
