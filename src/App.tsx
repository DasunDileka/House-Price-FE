import React from 'react';
import './App.css';
import AppRoutes from './routes';
import { ThemeProvider } from '@mui/material';
import { PrimaryTheme } from './assets/theme/theme';

function App() {
  return (
    <ThemeProvider theme={PrimaryTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
