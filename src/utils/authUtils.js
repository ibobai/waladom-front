// authUtils.js
export const login = (input, password) => {
  const validCredentials = [
    { email: 'ibo@ibo.com', id: '111995', username: 'ibo', password: '111995' },
  ];

  const user = validCredentials.find(
    (u) => (u.email === input || u.id === input || u.username === input) && u.password === password
  );

  if (user) {
    localStorage.setItem('isLoggedIn', 'true');
    return true;
  } else {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('isLoggedIn');
};

export const isLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

export const checkAuth = (navigate) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    navigate('/login'); // Redirect to login if not logged in
  }
};
