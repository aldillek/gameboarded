import React from "react";
import styled from "styled-components";

interface TitleProps {
  isBold?: boolean;
}

export const Title = styled.span<TitleProps>`
  font-size: ${({ theme }) => theme.fontSize.extraLarge};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
  letter-spacing: 2px;
`;
