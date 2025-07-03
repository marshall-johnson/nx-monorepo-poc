import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/app';
import MainLayout from './layouts/main-layout';
import { ThemeProvider } from '@shared/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MainLayout>
          <App />
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
