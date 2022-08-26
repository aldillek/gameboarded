import React from "react";
import styled from "styled-components";

const GamesListElementWrapper = styled.div`
  width: 100%;
  height: 130px;
  border-radius: 16px;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

interface GamesListElementProps {
  children: string;
}

export const GamesListElement = ({ children }: GamesListElementProps) => {
  return <GamesListElementWrapper>{children}</GamesListElementWrapper>;
};
