import { Link } from 'react-router-dom';

import { AuthStatus } from './AuthStatus';

export const AppHeader = () => (
  <header>
    <ul>
      <li>
        <Link to="/">Functional component</Link>
      </li>
      <li>
        <Link to="/class-component">Class component</Link>
      </li>
    </ul>
    <AuthStatus />
  </header>
);
