import { FC } from 'react';
import { Typography, TypographyProps, css, styled } from '@mui/material';

export enum fontWeight {
  light = 300,
  regular = 400,
  medium = 500,
  bold = 600,
  bolder = 700,
}

export enum fontSize {
  tiny10 = 10,
  caption12 = 12,
  body14 = 14,
  default16 = 16,
  large18 = 18,
  xlarge24 = 24,
  xxlarge28 = 28,
}

type ellipsisType =
  | { ellipsis?: false; width?: never }
  | { ellipsis: true; width: number };

export interface BaseTypographyProps extends TypographyProps {
  weight?: 'light' | 'regular' | 'medium' | 'bold' | 'bolder';
  scale?:
    | 'tiny10'
    | 'caption12'
    | 'body14'
    | 'default16'
    | 'large18'
    | 'xlarge24'
    | 'xxlarge28';
}

const BaseTypography: FC<BaseTypographyProps & ellipsisType> = ({
  children,
  weight = 'regular',
  scale = 'default16',
  ellipsis = false,
  width,
  ...props
}) => {
  return (
    //@ts-ignore
    <BTypography
      weight={weight}
      scale={scale}
      ellipsis={ellipsis}
      width={width}
      {...props}
    >
      {children}
    </BTypography>
  );
};

const BTypography = styled(Typography)<BaseTypographyProps & ellipsisType>`
  ${({ weight }) =>
    weight &&
    Object.values(fontWeight).includes(weight) &&
    css`
      font-weight: ${Object.values(fontWeight)[
        Object.keys(fontWeight).indexOf(weight)
      ]};
    `}
  ${({ scale }) =>
    scale &&
    Object.values(fontSize).includes(scale) &&
    css`
      font-size: ${Object.values(fontSize)[
        Object.keys(fontSize).indexOf(scale)
      ]}px;
    `}
    ${({ ellipsis, width }) =>
    ellipsis &&
    width &&
    css`
      white-space: nowrap;
      width: ${width}px;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;

export default BaseTypography;
