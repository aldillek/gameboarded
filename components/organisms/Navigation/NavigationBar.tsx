import react from "react";
import styled from "styled-components";
import { Logo } from "../../atoms/Logo/Logo";
import { NavigationRouting } from "../../molecules/NavigationRouting/NavigationRouting";

const NavigationWrapper = styled.header`
  max-width: 100vw;
  height: 100px;
  padding: 0px 64px;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  justify-content: space-between;
`;

export const NavigationBar = () => {
  return (
    <NavigationWrapper>
      <Logo isWhite />
      <NavigationRouting></NavigationRouting>
    </NavigationWrapper>
  );
};
