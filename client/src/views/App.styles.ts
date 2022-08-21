import styled from "styled-components";

export const AppWrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
`;
