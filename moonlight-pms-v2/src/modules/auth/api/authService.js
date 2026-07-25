import axios from "@/lib/axios";

export const registerWorkspace = async (payload) => {
  const { data } = await axios.post(
    "/api/auth/register-workspace",
    payload
  );

  return data;
};

