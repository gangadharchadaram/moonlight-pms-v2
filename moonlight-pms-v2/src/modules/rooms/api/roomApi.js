import api from "@/services/api/axios";

const BASE_URL = "/rooms";

export const roomApi = {

getAll: async () => {
    const response = await api.get(BASE_URL);
    return response.data.data;
},

    getById: async (id) => {
        const { data } = await api.get(`${BASE_URL}/${id}`);
        return data;
    },

    create: async (payload) => {
        const { data } = await api.post(BASE_URL, payload);
        return data;
    },

    update: async (id, payload) => {
        const { data } = await api.put(`${BASE_URL}/${id}`, payload);
        return data;
    },

    remove: async (id) => {
        const { data } = await api.delete(`${BASE_URL}/${id}`);
        return data;
    }

};