import React from "react";
import { customMedia } from "app/styles/media";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const CardComponent = ({ children }: Props) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default CardComponent;

const CardWrapper = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  height: 100%;
  width: 100%; 
  margin: auto;
  ${customMedia.lessThan("medium")`
    width: 100%;
    height: 100vh;
  `};
`;
