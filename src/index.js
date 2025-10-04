import React from 'react';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom/client';
import App from './App';

import "normalize.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);