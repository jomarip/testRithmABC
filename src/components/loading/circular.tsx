import {
  CircularProgress,
  CircularProgressProps,
  css,
  styled,
} from '@mui/material';
import React, { FC } from 'react';
interface Props extends CircularProgressProps {}
const CircularProgressIndicator: FC<Props> = (props) => {
  return <StyledCircularProgress thickness={4} size={22} {...props} />;
};
const StyledCircularProgress = styled(CircularProgress)<CircularProgressProps>`
  margin-left: 10px;
  width: 3px;
  margin-right: 10px;
  ${({ color }) => {
    switch (color) {
      case 'primary':
        return css`
          color: var(--white);
        `;
      case 'secondary':
        return css`
          color: var(--greyscale-700);
        `;
    }
  }}
`;
export default CircularProgressIndicator;
