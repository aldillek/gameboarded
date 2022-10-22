import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGetGamesQuery } from "../../../store";
import { Button } from "../../atoms/Button/Button";
import { Title } from "../../atoms/Title/Title";
import { GamesListElement } from "../../molecules/GamesListElement/GamesListElement";

const GamesListWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(184px, 250px));
  grid-gap: 24px;
  width: 100%;
  overflow-y: auto;
  height: 600px;
`;

const data = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6IntcIklkXCI6NSxcIkVtYWlsXCI6XCJtaWtvbGFqQGdtYWlsLmNvbVwifSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2NjEzNTA2NzZ9.-pcqcM-qx59BKFjMwFXGQSCk0TpTeC8uOSD4PL3MS7Y`;

export const GamesList = () => {
  const [games, setGamesList] = useState<{ id: string; title: string }[]>([]);

  const [loadedGames, setLoadedGames] = useState(0);

  const { data, isLoading } = useGetGamesQuery(loadedGames.toString());

  useEffect(() => {
    if (data) {
      setGamesList([...data, ...games]);
    }
  }, [data]);

  return (
    <GamesListWrapper>
      {!games ? (
        <>No data...</>
      ) : (
        games.map((game) => (
          <GamesListElement key={game.id}>{game.title}</GamesListElement>
        ))
      )}
      {isLoading ? <Title>Loading...</Title> : null}

      <Button onClick={() => setLoadedGames(games.length)}>
        {" "}
        Load more games
      </Button>
    </GamesListWrapper>
  );
};
