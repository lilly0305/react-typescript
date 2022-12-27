import React, { memo } from 'react';
import { ThemeProvider } from '@emotion/react';

import Home from './pages/Home';
import AppTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <Home />
    </ThemeProvider>
  );
}

export default memo(App);
