import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { customMedia } from 'app/styles/media';

interface Props {}

export const Topbar = memo((props: Props) => {
 

  return (
    <Wrapper className="topbar">
      <Left>
        <Logo to="/" />
      </Left>
      <Right>
        <RightOver>
        </RightOver>
      </Right>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  min-height: 82px;
  z-index: 101;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  background: #ffff;


  ${customMedia.lessThan('small')`
    min-height: 120px;
  `}
`;

const Left = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  ${customMedia.lessThan('small')`
    height: 70%;
  `};
`;
const Right = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 93%;

  ${customMedia.lessThan('small')`
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-end;
  `};

  ${customMedia.lessThan('xxsm')`
    justify-content: flex-end;
  `};

  ${customMedia.greaterThan('large')`
    width: 80%;
  `};
`;

const RightOver = styled.div`
  display: flex;
  flex: auto;
  justify-content: flex-end;

  ${customMedia.lessThan('small')`
    margin-top: 10px;
  `};
`;


export const Logo = styled(NavLink)`
  width: 150px;
  height: 32px;
  margin: auto 0;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: left;
  background-size: contain;
  display: none;

  ${customMedia.greaterThan('large')`
    display: block;
  `};
`;
