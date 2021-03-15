import { BrowserRouter as Router } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { RouterSwitch } from './RouterSwitch';
import { AuthProvider } from './authContext';

export const App = () => (
  <Router>
    <AuthProvider>
      <AppHeader />
      <hr />
      <RouterSwitch />
    </AuthProvider>
  </Router>
);
