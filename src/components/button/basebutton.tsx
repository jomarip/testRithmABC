import React, { FC, ReactElement, ReactNode } from 'react';
import {
  Button,
  ButtonProps,
  CircularProgress,
  css,
  styled,
} from '@mui/material';
import CircularProgressIndicator from '../loading/circular';
//@ts-ignore
export interface BaseButtonProps extends ButtonProps {
  //TODO: Implement XS size button

  size?: 'small' | 'medium' | 'large' | 'extraSmall';
  color?: 'primary' | 'secondary';
  isLoading?: boolean;
  loadingPosition?: 'left' | 'center' | 'right';
}

const BaseButton: FC<BaseButtonProps> = ({
  children,
  size = 'medium',
  color,
  isLoading,
  loadingPosition = 'center',
  ...props
}) => {
  const loadingComponent = (
    <>
      {isLoading ? (
        <>
          {loadingPosition === 'center' ? (
            <CircularProgressIndicator color={color} />
          ) : loadingPosition === 'left' ? (
            <>
              <CircularProgressIndicator color={color} /> {children}
            </>
          ) : (
            <>
              {children}
              <CircularProgressIndicator color={color} />{' '}
            </>
          )}
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
  if (size === 'extraSmall') {
    return (
      <XSmallBButton
        disableElevation
        disableTouchRipple
        disableFocusRipple
        disableRipple
        {...props}
      >
        {loadingComponent}
      </XSmallBButton>
    );
  }
  return (
    <BButton
      disableElevation
      disableTouchRipple
      disableFocusRipple
      disableRipple
      // @ts-ignore
      size={size}
      {...props}
    >
      {loadingComponent}
    </BButton>
  );
};
const BButton = styled(Button)<BaseButtonProps>`
  border-radius: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-transform: none;
  min-width: unset;

  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          padding: 16px;
          height: 56px;
        `;
      case 'medium':
        return css`
          height: 48px;
          padding: 12px;
        `;
      case 'small':
        return css`
          height: 40px;
          padding: 10px;
          font-size: 14px;
          font-weight: 400;
        `;
    }
  }}
`;
const XSmallBButton = styled(Button)<BaseButtonProps>`
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  text-transform: none;
  min-width: unset;
  height: 32px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 500;
`;

export default BaseButton;
