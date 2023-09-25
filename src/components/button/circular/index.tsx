import { IconButton, IconButtonProps, css, styled } from '@mui/material';
import React, { FC } from 'react';
import { C1_Medium, C1_Regular } from '../../../styles';
import { COLUMN } from '../../../styles/globalStyles';
import { SecondaryButtonStyle } from '../secondary';
interface Props extends IconButtonProps {
  iconSrc: string;
  text?: string;
  onClick?: React.MouseEventHandler;
  size?: 'small' | 'large';
}
const CircularIconButton: FC<Props> = (props) => {
  const { iconSrc, onClick, text, size = 'large', ...rest } = props;
  return (
    <Wrapper>
      <StyledIconButton {...rest} size={size} disableRipple onClick={onClick}>
        <Icon src={iconSrc} />
      </StyledIconButton>
      <HintText>{text}</HintText>
    </Wrapper>
  );
};
const Wrapper = styled('div')`
  ${COLUMN}
`;
const StyledIconButton = styled(IconButton)`
  ${SecondaryButtonStyle}
  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          width: 56px;
          height: 56px;
        `;
      case 'small':
        return css`
          width: 48px;
          height: 48px;
        `;
      default:
        break;
    }
  }}
  border: 1px solid var(--greyscale-100);
`;
const Icon = styled('img')``;
const HintText = styled('div')`
  ${C1_Medium}
  color:var(--greyscale-800);
  margin-top: 4px;
`;
export default CircularIconButton;
