import { lazy, Suspense } from 'react';

import "./App.css"

import { GoogleOAuthProvider } from '@react-oauth/google';
import { AccProvider } from './context/Provider';
import Loader from './components/loader/Loader';

const Messenger = lazy(() => import('./components/Messenger'));
function App() {
  const id = "673188237068-r1raabrs0gdced988ufgtj3d3knmkglk.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={id}>
      <AccProvider>
        <Suspense fallback={<Loader />}>
          <Messenger />
        </Suspense>
      </AccProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
