import { TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { StyledTextfield } from './styles';
import { formatCurrencyWithMaxFraction } from '@/utils/formatters';

type InputWithFormatterProps = Omit<TextFieldProps, 'onChange'> & {
  value: string;
  maxFraction?: number;
  onChange: (newValue: string) => void;
};

export const AmountInputWithFormatter: FC<InputWithFormatterProps> = ({
  onChange,
  value,
  maxFraction = 8,
  ...props
}) => {
  let formatted = formatCurrencyWithMaxFraction(value, maxFraction);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    let v = e.target.value.replace(/ /g, '');
    if (v.includes('..')) {
      return;
    }
    if (v.length > 0) {
      var count = (v.match(/\./g) || []).length;
      if (count > 1) {
        return;
      }
    }
    if (v === '.') {
      v = '0.';
    }
    if (isNaN(Number(v.replace(/,/g, '')))) {
      return;
    }
    if (maxFraction && v.includes('.')) {
      const splitted = v.split('.');
      if (splitted[1] && splitted[1].length > maxFraction) {
        //prevent input if fraction length is much
        return;
      }
    }
    const noComma = v.replace(/,/g, '');
    if (Number(noComma) > 10000000000) {
      return;
    }
    onChange(v.replace(/,/g, ''));
  };

  return (
    <StyledTextfield
      value={formatted}
      onChange={handleInputChange}
      {...props}
    />
  );
};
