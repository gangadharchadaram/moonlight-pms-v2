import api from "./api/axios";

export const registerWorkspace = async (payload) => {
  const response = await api.post(
    "/auth/register-workspace",
    payload
  );

  return response.data;
};

export const login = async (payload) => {
  const { data } = await api.post("/auth/login", payload);
  return data;
};