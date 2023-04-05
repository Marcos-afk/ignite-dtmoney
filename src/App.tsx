import { DEFAULT_THEME } from '@theme/default';
import { GlobalStyle } from '@theme/global';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  return (
    <ThemeProvider theme={DEFAULT_THEME}>
      <GlobalStyle />
      <h1>DT Money</h1>
    </ThemeProvider>
  );
};

export default App;
