import React, { FC } from 'react';
import { StyledTextfield } from './styles';
import { PlaceHolderStyle } from '../baseInputStyles';
import { TextFieldProps } from '@mui/material';

export const AmountInput: FC<TextFieldProps> = (props) => {
  return <StyledTextfield {...props} />;
};
//merged
