import api from "@/services/api/axios";

const BASE_URL = "/guests";

const guestService = {
  getAll: (params) => api.get(BASE_URL, { params }),

  getById: (id) => api.get(`${BASE_URL}/${id}`),

  create: (payload) => api.post(BASE_URL, payload),

  update: (id, payload) => api.put(`${BASE_URL}/${id}`, payload),

  remove: (id) => api.delete(`${BASE_URL}/${id}`),
};

export default guestService;