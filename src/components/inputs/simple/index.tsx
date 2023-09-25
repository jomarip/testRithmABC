import {
  InputAdornment,
  outlinedInputClasses,
  styled,
  TextField,
  textFieldClasses,
  TextFieldProps,
} from '@mui/material';
import React, { FC } from 'react';
import {
  InputProps,
  Label,
  PlaceHolderStyle,
  StyledInput,
  Wrapper,
} from '../baseInputStyles';
import { Divider, InputActionComponent } from '../password/styles';

const SimpleInput: FC<InputProps> = ({
  touched,
  errormessage,
  label,
  customsize = 'medium',
  className,
  rightaction,
  leftaction,
  ...props
}) => {
  const error = errormessage !== undefined;
  return (
    <Wrapper className={className}>
      <Label error={touched && error ? true : false}>{label}</Label>
      <StyledInput
        {...props}
        label=""
        customsize={customsize}
        helperText={touched && errormessage}
        error={touched && error ? true : false}
        sx={PlaceHolderStyle}
        spellCheck={false}
        InputProps={
          leftaction
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    <InputActionComponent onClick={leftaction.onClick}>
                      {leftaction.component}
                    </InputActionComponent>
                  </InputAdornment>
                ),
              }
            : rightaction
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <Divider />
                    <InputActionComponent onClick={rightaction.onClick}>
                      {rightaction.component}
                    </InputActionComponent>
                  </InputAdornment>
                ),
              }
            : undefined
        }
      />
    </Wrapper>
  );
};

export default SimpleInput;
