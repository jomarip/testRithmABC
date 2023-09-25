import { FC } from 'react';
import { styled } from '@mui/material';
import { divide } from 'precise-math';

interface SpinnerProps {
  width?: number;
  height?: number;
}

export const Spinner: FC<SpinnerProps> = ({ width, height }) => {
  return (
    <Container width={width} height={height}>
      <Bubble1 />
      <Bubble2 />
      <Bubble3 />
      <Bubble4 />
      <Bubble5 />
      <Bubble6 />
      <Bubble7 />
      <Bubble8 />
    </Container>
  );
};

const Container = styled('div')<SpinnerProps>`
  position: relative;
  width: ${(props) => `${props.width}px` || '24px'};
  height: ${(props) => `${props.height}px` || '24px'};
  display: inline-block;
  padding: ${(props) => `${props.width && divide(props.width, 2)}px` || '12px'};
`;
const Bubble = styled('div')`
  width: 3px;
  height: 6px;
  background: #fff;
  position: absolute;
  left: 49%;
  top: 43%;
  opacity: 0;
  -webkit-border-radius: 50px;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  -webkit-animation: fade 1s linear infinite;

  @-webkit-keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }
`;

const Bubble1 = styled(Bubble)`
  -webkit-transform: rotate(0deg) translate(0, -130%);
  -webkit-animation-delay: 0s;
`;

const Bubble2 = styled(Bubble)`
  -webkit-transform: rotate(45deg) translate(0, -130%);
  -webkit-animation-delay: -0.875s;
`;

const Bubble3 = styled(Bubble)`
  -webkit-transform: rotate(90deg) translate(0, -130%);
  -webkit-animation-delay: -0.75s;
`;

const Bubble4 = styled(Bubble)`
  -webkit-transform: rotate(135deg) translate(0, -130%);
  -webkit-animation-delay: -0.625s;
`;

const Bubble5 = styled(Bubble)`
  -webkit-transform: rotate(180deg) translate(0, -130%);
  -webkit-animation-delay: -0.5s;
`;

const Bubble6 = styled(Bubble)`
  -webkit-transform: rotate(225deg) translate(0, -130%);
  -webkit-animation-delay: -0.375s;
`;

const Bubble7 = styled(Bubble)`
  -webkit-transform: rotate(270deg) translate(0, -130%);
  -webkit-animation-delay: -0.25s;
`;

const Bubble8 = styled(Bubble)`
  -webkit-transform: rotate(315deg) translate(0, -130%);
  -webkit-animation-delay: -0.125s;
`;
