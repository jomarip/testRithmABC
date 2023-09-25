import { FC, forwardRef } from 'react';
import { Zoom, ZoomProps, IconButton } from '@mui/material';

import Icon from '../icon';

import CloseIcon from 'assets/svg/close.svg';

import { ModalProps } from './types';

import {
  StyledDialog,
  StyledDrawer,
  Wrapper,
  ChildWrapper,
  TopWrapper,
  Title,
  TopRightWrapper,
  StyledIconButton,
  StyledIcon,
} from './style';

// eslint-disable-next-line
const Transition = forwardRef<HTMLDivElement, ZoomProps>((props, ref) => {
  return <Zoom ref={props.ref} {...props} timeout={300} />;
});

export const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  actions,
  anchor = 'bottom',
  ...props
}) => {
  // detect if width is less than 768px
  const isMobile = false; //useScreenSize();
  if (isMobile) {
    return (
      <StyledDrawer
        anchor={anchor}
        open={isOpen}
        // eslint-disable-next-line
        onClose={() => (onClose ? onClose() : null)}
        BackdropProps={{
          style: {
            background: 'rgba(27, 27, 27, 0.75)',
            backdropFilter: 'blur(20px)',
          },
        }}
        {...props}
      >
        <Wrapper>
          <TopWrapper>
            {typeof title === 'string' ? <Title>{title}</Title> : title}
            <TopRightWrapper>
              {actions ? actions : <div />}
              {onClose ? (
                <StyledIconButton onClick={() => onClose()}>
                  <StyledIcon src={CloseIcon} />
                </StyledIconButton>
              ) : (
                <></>
              )}
            </TopRightWrapper>
          </TopWrapper>
          <ChildWrapper>{children}</ChildWrapper>
        </Wrapper>
      </StyledDrawer>
    );
  }

  return (
    <StyledDialog
      TransitionComponent={Transition}
      fullScreen={false}
      open={isOpen || false}
      onClose={() => (onClose ? onClose() : null)}
      BackdropProps={{
        style: {
          background: 'rgba(27, 27, 27, 0.75)',
          backdropFilter: 'blur(20px)',
        },
      }}
      {...props}
    >
      <Wrapper>
        {title && onClose && (
          <TopWrapper>
            {typeof title === 'string' ? <Title>{title}</Title> : title}
            <TopRightWrapper>
              {actions ? actions : <div />}
              {onClose ? (
                <IconButton onClick={() => onClose()}>
                  <Icon src={CloseIcon} />
                </IconButton>
              ) : (
                <></>
              )}
            </TopRightWrapper>
          </TopWrapper>
        )}
        <ChildWrapper>{children}</ChildWrapper>
      </Wrapper>
    </StyledDialog>
  );
};
