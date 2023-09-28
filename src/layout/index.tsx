import { Box, styled } from '@mui/material';
import { ReactNode } from 'react';
import { Header } from './header';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ContentContainer>
      <Header />
      {children}
    </ContentContainer>
  );
};

const ContentContainer = styled(Box)`
  min-height: calc(100vh);
  box-sizing: border-box;
  background-color: var(--black);
  color: white;
`;
