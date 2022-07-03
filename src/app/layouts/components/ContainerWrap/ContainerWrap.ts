import styled from 'styled-components/macro';
import { customMedia } from '../../../styles/media';

export const ContainerWrap = styled.div`
  padding-top: 82px;
  min-height: 100vh;
  transition: 'padding-left' 0.3s;
  background: #ffffff;

  ${customMedia.lessThan('small')`
    padding-top: 120px;
  `};
`;
