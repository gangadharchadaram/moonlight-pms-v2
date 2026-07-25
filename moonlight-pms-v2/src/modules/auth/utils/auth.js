export const saveAuth = (data) => {
  localStorage.setItem("token", data.token);

  localStorage.setItem(
    "user",
    JSON.stringify({
      userId: data.userId,
      clientId: data.clientId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
    })
  );
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};