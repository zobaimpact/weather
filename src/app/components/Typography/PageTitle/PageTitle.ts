import styled from 'styled-components/macro';
import { H3 } from '../../../components/Typography/H3/H3';
import { customMedia } from 'app/styles/media';
export const PageTitle = styled(H3)`
  text-align: ${p => p.theme.direction['left']};
  font-weight: 500;
  text-transform: capitalize;
  font-size: 20px;

  &:last-child {
    margin-bottom: 30px;
    ${customMedia.lessThan('small')`
    margin-bottom: 15px;
  `}
  }

  &.page-title--not-last {
    margin-top: 20px;
  }
`;
