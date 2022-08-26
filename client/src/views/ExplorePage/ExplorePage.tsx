import React from "react";
import styled from "styled-components";
import { Title } from "../../components/atoms/Title/Title";
import { Filters } from "../../components/organisms/Filters/Filters";
import { GamesList } from "../../components/organisms/GamesList/GamesList";

const ExplorePageWrapper = styled.div`
  padding: ${({ theme }) =>
    `${theme.elements.navigationHeight} 16px 16px 16px`};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
`;

export const ExplorePage = () => {
  return (
    <ExplorePageWrapper>
      <Title isBold>ranking</Title>
      <Filters></Filters>
      <GamesList></GamesList>
    </ExplorePageWrapper>
  );
};
