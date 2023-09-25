import { styled } from '@mui/material';
import { FC } from 'react';
import { BUTTON } from '../../../styles/globalStyles';
import BaseButton, { BaseButtonProps } from '../basebutton';
interface Props extends BaseButtonProps {}
export const PrimaryButton: FC<Props> = ({
  children,
  size = 'medium',
  ...props
}) => {
  return (
    <Primary color="primary" size={size} {...props}>
      {children}
    </Primary>
  );
};

const Primary = styled(BaseButton)`
  color: var(--black);
  background-color: var(--greyscale-700);
  &:hover {
    background-color: var(--greyscale-600);
  }
  &:active {
    background-color: var(--greyscale-800);
  }
  &:disabled {
    color: var(--greyscale-50);
    background-color: var(--greyscale-300);
  }
`;
