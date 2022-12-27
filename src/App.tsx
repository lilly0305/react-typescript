import React, { memo } from 'react';
import { ThemeProvider } from '@emotion/react';
import AppTheme from './theme';
import { Home } from './pages';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default memo(App);
