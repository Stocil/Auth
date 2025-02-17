import { StrictMode } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { AccessProvider } from 'components/access-provider';

import { clientId } from './constants';
import { Router } from './routes';
import { store } from './store';
import { ThemeModeProvider } from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={clientId}>
        <AccessProvider>
          <ThemeModeProvider>
            <Router />
          </ThemeModeProvider>
        </AccessProvider>
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
);
