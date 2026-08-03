import apiClient from "@/shared/api/apiClient";

const BASE_URL = "/wings";

export const wingApi = {

    getAll: async () => {
        const response = await apiClient.get(BASE_URL);
        return response.data.data;
    },

    getById: async (id) => {
        const response = await apiClient.get(`${BASE_URL}/${id}`);
        return response.data.data;
    },

    getByBuilding: async (buildingId) => {
        const response = await apiClient.get(
            `${BASE_URL}/building/${buildingId}`
        );

        return response.data.data;
    },

    create: async (payload) => {
        const response = await apiClient.post(
            BASE_URL,
            payload
        );

        return response.data.data;
    },

    update: async (id, payload) => {
        const response = await apiClient.put(
            `${BASE_URL}/${id}`,
            payload
        );

        return response.data.data;
    },

    remove: async (id) => {
        const response = await apiClient.delete(
            `${BASE_URL}/${id}`
        );

        return response.data;
    }

};