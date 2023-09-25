import { FC, ReactElement, ReactNode } from 'react';
import { Box, styled, css } from '@mui/material';
import { mediaQueries } from '@/styles/mediaQueries';

export interface ShadowBorderBoxProps {
  children: ReactElement | ReactNode;
}

const ShadowBorderBox: FC<ShadowBorderBoxProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled(Box)<ShadowBorderBoxProps>`
  width: 100%;
  max-width: 608px;
  border-radius: 16px;
  position: relative;
  box-shadow:
    -10px 0px 35px 0px rgba(209, 254, 146, 0.5),
    10px 0px 35px 0px rgba(9, 150, 105, 0.5);
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 16px;
    padding: 1.7px;
    opacity: 0.7;
    background: linear-gradient(
      90deg,
      rgba(209, 254, 146, 1),
      rgba(9, 150, 105, 1)
    );
    -webkit-mask:
      linear-gradient(var(--White) 0 0) content-box,
      linear-gradient(var(--White) 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  ${mediaQueries.lessThan('sm')`
      box-shadow: -1px 0px 5px 0px rgba(209, 254, 146, 0.5),
    10px 0px 35px 0px rgba(9, 150, 105, 0.5);
  `}
`;

export default ShadowBorderBox;
