import React from "react";
import styled from "styled-components";

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  color: ${({ theme }) => theme.colors.black};
`;
