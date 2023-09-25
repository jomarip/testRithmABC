import * as React from 'react';
import {
  styled,
  InputLabel,
  css,
  SelectChangeEvent,
  SelectProps,
  MenuItem,
  Select,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { COLUMN_ALIGN_START__JUSTIFY_CENTER } from '@/styles/globalStyles';
import { TEXT_LG_MEDIUM } from '@/styles/globalTypography';

interface DropdownItems {
  value: string;
  label: string;
}
export interface BaseSelectProps extends SelectProps {
  className?: string;
  label?: string;
  items: DropdownItems[];
  onChange?: (event: SelectChangeEvent<any>) => void;
  initialvalue?: string;
}
const BaseSelect = (props: BaseSelectProps) => {
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
        variant="outlined"
        MenuProps={{
          PaperProps: {
            style: {
              backgroundColor: 'var(--Neutrals-N700)',
            },
          },
        }}
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

const Wrapper = styled('div')`
  ${COLUMN_ALIGN_START__JUSTIFY_CENTER}
`;

const StyledDropDown = styled(Select)`
  height: 48px;
  background-color: var(--Black);
  color: var(--White);
  text-align: left !important;

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

const Item = styled(MenuItem)`
  ${TEXT_LG_MEDIUM}
`;

export const Label = styled(InputLabel)<{ error?: boolean }>`
  color: var(--Neutrals-N500);
  align-self: flex-start;
  margin-bottom: 8px;
  ${({ error }) =>
    error &&
    css`
      /* color: var(--error-600); */
    `}
`;
export default BaseSelect;
