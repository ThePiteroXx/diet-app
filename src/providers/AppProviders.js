import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ErrorProvider } from 'hooks/useError';
import { store } from 'store';

const AppProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ErrorProvider>
          <GlobalStyle />
          <BrowserRouter>{children}</BrowserRouter>
        </ErrorProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default AppProviders;
