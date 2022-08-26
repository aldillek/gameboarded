import React from "react";
import styled from "styled-components";
import { Title } from "../../atoms/Title/Title";

const FiltersWrapper = styled.div`
  width: 100%;
  height: 80px;
  margin: 16px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 10px;
`;

export const Filters = () => {
  return (
    <FiltersWrapper>
      <Title>filters</Title>
    </FiltersWrapper>
  );
};
