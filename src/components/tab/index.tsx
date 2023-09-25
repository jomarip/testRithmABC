import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Tabs, Tab, styled } from '@mui/material';

import { TEXT_XS_SEMIBOLD } from '@/styles/globalTypography';
import {
  BORDER_BLACK_WHITE_4,
  BORDER_BLACK_WHITE_8,
} from '@/styles/globalStyles';

export interface CustomTabProps {
  items: { tabName: string; value: string }[];
  handleTabChange: (newValue: string) => void;
}

export const CustomTab: FC<CustomTabProps> = ({ items, handleTabChange }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const validTabValue = items.find((item) => item.value === pathname);
  const activeTabValue = validTabValue ? pathname : items[0].value;

  const [value, setValue] = useState(activeTabValue);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    handleTabChange(newValue);
  };

  return (
    <Container>
      <Items
        TabIndicatorProps={{ sx: { display: 'none' } }}
        value={value}
        onChange={handleChange}
        centered
      >
        {items?.map((item) => {
          return (
            <Item key={item.value} label={item.tabName} value={item.value} />
          );
        })}
      </Items>
    </Container>
  );
};

const Container = styled(Box)`
  width: 100%;
  max-width: 352px;
  background-color: var(--Black);

  padding: 8px;
  ${BORDER_BLACK_WHITE_8}
`;

const Items = styled(Tabs)``;

const Item = styled(Tab)`
  ${TEXT_XS_SEMIBOLD}
  letter-spacing: 0.01rem;
  width: 50%;
  max-width: 168px;
  padding: 12px 0;
  color: var(--Neutrals-N100);
  text-transform: capitalize;
  &.MuiTab-root {
  }

  &.Mui-selected {
    background-color: var(--Neutrals-N700);
    color: var(--White);
    position: relative;
    border: none;
    border-radius: 4px;
    outline: none;
    ${BORDER_BLACK_WHITE_4}
  }
`;
export default CustomTab;
