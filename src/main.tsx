import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeModeProvider } from './theme';
import { Router } from './routes';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { clientId } from './constants';
import { Provider } from 'react-redux';
import { store } from './store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientId}>
        <ThemeModeProvider>
          <Router />
        </ThemeModeProvider>
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>
);
