import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../../assets/images/logo.svg?component";

const LogoWrapper = styled(Link)`
  width: 120px;
  height: inherit;
  display: grid;
  place-items: center;
  svg {
    height: 64px;
  }
`;

interface LogoProps {
  isWhite: boolean;
}

export const Logo = ({ isWhite }: LogoProps) => {
  return (
    <LogoWrapper to="/">
      <LogoImage fill={isWhite ? "white" : "black"} />
    </LogoWrapper>
  );
};
