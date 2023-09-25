import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select';
import { styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Wrapper } from './styles';
import { Label } from '../baseInputStyles';
import { B2_Medium_Regular } from '@/styles';
interface DropdownItems {
  value: string;
  label: string;
}
interface Props extends SelectProps {
  className?: string;
  label?: string;
  items: DropdownItems[];
  onChange?: (event: SelectChangeEvent<any>) => void;
  initialvalue?: string;
}
const BasicSelect = (props: Props) => {
  const { items, onChange, label, initialvalue } = props;
  const [value, setValue] = React.useState(initialvalue);

  const handleChange = (event: SelectChangeEvent<any>) => {
    setValue(event.target.value as string);
    onChange && onChange(event);
  };

  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <StyledDropDown
        {...props}
        label=""
        value={value}
        IconComponent={ExpandMoreIcon}
        onChange={handleChange}
        displayEmpty
      >
        {items.map((item) => (
          <Item key={item.value} value={item.value}>
            {item.label}
          </Item>
        ))}
      </StyledDropDown>
    </Wrapper>
  );
};
const StyledDropDown = styled(Select)`
  ${({ fullWidth }) => `width: ${fullWidth ? '100%' : '135px'};`}
  height: 48px;
  border-radius: 12px;
  ${B2_Medium_Regular}
  text-align: left !important;
  color: var(--greyscale-600);
  .MuiOutlinedInput-notchedOutline {
    border: 1px solid var(--greyscale-100);
    &:hover {
      border: 1px solid red;
    }
  }
  color: var(--greyscale-400);
  ${B2_Medium_Regular}
`;
const Item = styled(MenuItem)``;
export default BasicSelect;
