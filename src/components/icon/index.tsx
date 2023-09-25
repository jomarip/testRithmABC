import { FC } from 'react';
import { styled } from '@mui/material';

export interface IconProps {
  src: string;
  width?: string;
  height?: string;
}

const Icon: FC<IconProps> = ({ src, ...props }) => {
  return <CIcon src={src} {...props} />;
};

const CIcon = styled('img')<IconProps>`
  width: ${({ width }) => width || 'unset'};
  height: ${({ height }) => height || 'unset'};
`;
export default Icon;
