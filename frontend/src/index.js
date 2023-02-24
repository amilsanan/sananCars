import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="947937234002-qvcmaslo0nmmdn2k7be6hjnivl6b2cr5.apps.googleusercontent.com">

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
);

