import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms/Button/Button";
import { Title } from "../../atoms/Title/Title";

const LoginFormWrapper = styled.div`
  width: 516px;
  height: 531px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.darkGrey};
  border-radius: 5px;
  padding: 10px;
  background-color: transparent;
`;

export const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <Title>sign in.</Title>
      <Input type="text"></Input>
      <Input type="text"></Input>
      <Button isBig isDark>
        sign in
      </Button>
    </LoginFormWrapper>
  );
};
