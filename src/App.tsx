import { Transactions } from '@pages/Transactions';
import { DEFAULT_THEME } from '@theme/default';
import { GlobalStyle } from '@theme/global';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  );
};

export default App;
