import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms/Button/Button";

const LandingPageTitleWrapper = styled.div`
  margin-right: 50%;
  text-align: center;
  line-height: 1rem;
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
`;

export const LandingPageTitle = () => {
  return (
    <LandingPageTitleWrapper>
      <p> explore the world</p>
      <p>
        of <strong>board games</strong>
      </p>
      <p>and track your adventure.</p>
      <Button isBig>get started</Button>
    </LandingPageTitleWrapper>
  );
};
