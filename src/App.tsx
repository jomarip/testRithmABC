import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes as appRoutes } from './routes';
import 'styles/bases.css';
import { Blockchain } from './containers/global';
import { CustomToastContainer } from './components/toast/ToastContainer';
import NotFound from './containers/notFound/NotFound';
import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { avalanche } from 'wagmi/chains';

import { publicProvider } from 'wagmi/providers/public'

const { publicClient, webSocketPublicClient } = configureChains(
  [avalanche],
  [publicProvider()],
)
const config = createConfig({
  publicClient,
  webSocketPublicClient,
})
// define theme
const theme = createTheme({
  palette: {
    primary: {
      light: '#6eff5e',
      main: '#2CEF32',
      dark: '#1bde21',
      contrastText: '#000',
    },
    secondary: {
      main: '#4db6ac',
      light: '#82e9de',
      dark: '#00867d',
      contrastText: '#000',
    },
  },
});
export function App() {
  return (
    <WagmiConfig config={config}>

    <ThemeProvider theme={theme}>
      <CustomToastContainer />
      <CssBaseline />
      <AppContainer>
        <Blockchain />
        <Router>
          <ContentContainer>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </ContentContainer>
        </Router>
      </AppContainer>
    </ThemeProvider>
    </WagmiConfig>
  );
}
const AppContainer = styled(Box)`
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
  width: 100vw;
`;

const ContentContainer = styled(Box)`
  min-height: calc(100vh);
  box-sizing: border-box;
  background-color: var(--black);
  color: white;
`;
export function WrappedApp() {

  return <App />;
}
