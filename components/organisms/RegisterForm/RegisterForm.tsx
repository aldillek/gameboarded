import React from "react";
import styled from "styled-components";
import { Button } from "../../atoms/Button/Button";
import { Title } from "../../atoms/Title/Title";

const RegisterFormWrapper = styled.div`
  width: 1016px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  height: 531px;
`;

const SmallFormWrapper = styled.div`
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
export const RegisterForm = () => {
  return (
    <RegisterFormWrapper>
      <SmallFormWrapper>
        <Title>
          <strong>sign up.</strong>
        </Title>
        <Input type="text" placeholder="email"></Input>
        <Input type="text" placeholder="password"></Input>
        <Input type="text" placeholder="repeat password"></Input>
        <Button isDark isBig>
          Create account
        </Button>
      </SmallFormWrapper>
      Tutaj będzie ikonka jak Ania zrobi
      <SmallFormWrapper>
        <p> or</p>
        <p>already has account?</p>
        <Button isDark isBig>
          Sign Up
        </Button>
      </SmallFormWrapper>
    </RegisterFormWrapper>
  );
};
