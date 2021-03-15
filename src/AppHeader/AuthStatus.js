import { useAuth } from '../authContext';

export const AuthStatus = () => {
  const { authenticated, login, logout } = useAuth();

  if (authenticated === undefined) {
    return '...'; // this could be a spinner
  }

  return authenticated ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <button onClick={login}>Login</button>
  );
};
