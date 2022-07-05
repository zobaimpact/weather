import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { StyleConstants } from 'app/styles/StyleConstants';
export function Loader() {
  return (
    <Container>
      <Background>
        <LoaderDiv>
          <DivOne />
          <DivTwo />
          <DivThree />
        </LoaderDiv>
      </Background>
    </Container>
  );
}
const Container = styled.div`
  /* position: fixed; */
  position: relative;

  width: 100%;
  height: 100vh;
`;
const Background = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;
const loadAnimation = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`;
const LoaderDiv = styled.div`
  z-index: 1000;
  display: inline-block;
  position: relative;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
`;
const DivOne = styled.div`
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: ${StyleConstants.COLOR_ACCENT};
  animation: ${loadAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  left: 8px;
  animation-delay: -0.24s;
`;
const DivTwo = styled.div`
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: ${StyleConstants.COLOR_ACCENT};
  animation: ${loadAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  left: 32px;
  animation-delay: -0.12s;
`;
const DivThree = styled.div`
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: ${StyleConstants.COLOR_ACCENT};
  animation: ${loadAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  left: 56px;
  animation-delay: 0;
`;
