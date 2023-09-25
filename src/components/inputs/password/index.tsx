import React, { FC } from 'react';
import Visibility from 'assets/svg/visibility.svg';
import VisibilityOff from 'assets/svg/visibility_off.svg';
import { InputProps, PlaceHolderStyle } from '../baseInputStyles';
import SimpleInput from '../simple';
import { EyeIcon } from './styles';

const PasswordInput: FC<InputProps> = (props) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <SimpleInput
      {...props}
      type={showPassword ? 'text' : 'password'}
      sx={PlaceHolderStyle}
      rightaction={{
        component: <EyeIcon src={showPassword ? VisibilityOff : Visibility} />,
        onClick: handleClickShowPassword,
      }}
    />
  );
};

export default PasswordInput;
