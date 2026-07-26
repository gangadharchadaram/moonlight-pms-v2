import api from "@/services/api/axios";

const BASE_URL = "/api/v1/rooms";

export const getRooms = async () => {
  const { data } = await api.get(BASE_URL);
  return data;
};

export const getRoomById = async (id) => {
  const { data } = await api.get(`${BASE_URL}/${id}`);
  return data;
};

export const createRoom = async (payload) => {
  const { data } = await api.post(BASE_URL, payload);
  return data;
};

export const updateRoom = async ({ id, payload }) => {
  const { data } = await api.put(`${BASE_URL}/${id}`, payload);
  return data;
};

export const deleteRoom = async (id) => {
  const { data } = await api.delete(`${BASE_URL}/${id}`);
  return data;
};