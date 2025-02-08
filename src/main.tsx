import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeModeProvider } from './theme';
import { Router } from './routes';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientId } from './constants';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <ThemeModeProvider>
        <Router />
      </ThemeModeProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
