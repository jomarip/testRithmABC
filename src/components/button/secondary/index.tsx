import { css, styled } from '@mui/material';
import { FC } from 'react';
import { BUTTON } from '../../../styles/globalStyles';
import BaseButton, { BaseButtonProps } from '../basebutton';
interface Props extends BaseButtonProps {}
export const SecondaryButton: FC<Props> = ({
  children,
  size = 'medium',
  ...props
}) => {
  return (
    <Secondary color="secondary" size={size} {...props}>
      {children}
    </Secondary>
  );
};

export const SecondaryButtonStyle = css`
  color: var(--greyscale-700);
  background-color: var(--white);
  border: 1px solid var(--greyscale-100);
  &:hover {
    background-color: var(--white);
    border-color: var(--greyscale-300);
  }
  &:active {
    border-color: var(--greyscale-700);
  }
  &:disabled {
    border-color: var(--greyscale-100);
    background-color: var(--greyscale-25);
  }
`;
const Secondary = styled(BaseButton)`
  ${SecondaryButtonStyle}
`;
