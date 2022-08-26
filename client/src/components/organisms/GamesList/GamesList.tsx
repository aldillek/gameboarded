import React from "react";
import styled from "styled-components";
import { GamesListElement } from "../../molecules/GamesListElement/GamesListElement";

const GamesListWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(184px, 250px));
  grid-gap: 24px;
  width: 100%;
  overflow-y: auto;
`;

const game = {
  name: "Miki",
  password: "test",
};

const games = [game, game, game, game, game, game, game, game, game];

export const GamesList = () => {
  return (
    <GamesListWrapper>
      {games.map((game) => (
        <GamesListElement>{game.name}</GamesListElement>
      ))}
    </GamesListWrapper>
  );
};
