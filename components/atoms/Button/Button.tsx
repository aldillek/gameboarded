import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProps {
  isBig?: boolean;
  isDark?: boolean;
  onClick: any;
}

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? "10px 38px" : "7px 20px")};
  font-size: ${({ isBig, theme: { fontSize } }) =>
    isBig ? fontSize.small : fontSize.medium};
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.colors.darkGrey : theme.colors.lightBrown};
  border-radius: 9px;
  border: none;
  font-weight: bold;
  color: ${({ theme, isDark }) =>
    isDark ? theme.colors.lightBrown : theme.colors.darkGrey};
`;
