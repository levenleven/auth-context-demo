const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomDelay = () => delay(Math.random() * 1500);

const AUTH_STORAGE_KEY = 'auth_key';

// localStorage used just for the demo

export async function login(userName, password) {
  await randomDelay();

  localStorage.setItem(AUTH_STORAGE_KEY, userName);

  return userName;
}

export async function logout() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export async function getLoggedInUser() {
  await randomDelay();

  return localStorage.getItem(AUTH_STORAGE_KEY);
}
