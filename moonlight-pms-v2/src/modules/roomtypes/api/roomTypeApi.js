import apiClient from "@/shared/api/apiClient";

const BASE_URL = "/room-types";

export const roomTypeApi = {

getAll: async () => {
    console.log("Calling Room Type API...");

    const response = await apiClient.get("/room-types");

    console.log(response);

    return response.data.data;
},

    getById: async (id) => {
        const response = await apiClient.get(`${BASE_URL}/${id}`);
        return response.data.data;
    },

    create: async (payload) => {
        const response = await apiClient.post(BASE_URL, payload);
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
        const response = await apiClient.delete(`${BASE_URL}/${id}`);
        return response.data;
    }

};