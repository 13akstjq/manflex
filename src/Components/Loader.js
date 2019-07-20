import React from "react";
import styled, { keyframes } from "styled-components";
import { Loading } from "./Icon";

const spin = keyframes`
  from {
   transform  : rotate(0deg);
  }to {
   transform  : rotate(360deg);
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${spin} 3s infinite;
`;

export default () => {
  return (
    <Wrapper>
      <Loading />
    </Wrapper>
  );
};
