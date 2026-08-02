import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import { roomApi } from "../api/roomApi";

const QUERY_KEY = ["rooms"];

export const useRooms = () => {

    return useQuery({

        queryKey: QUERY_KEY,

        queryFn: roomApi.getAll,

        staleTime: 5 * 60 * 1000,

        refetchOnWindowFocus: false,

    });

};

export const useRoom = (id) => {

    return useQuery({

        queryKey: [...QUERY_KEY, id],

        queryFn: () => roomApi.getById(id),

        enabled: !!id,

    });

};

export const useCreateRoom = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: roomApi.create,

        onSuccess: () => {

            toast.success("Room created successfully");

            queryClient.invalidateQueries({
                queryKey: QUERY_KEY,
            });

        }

    });

};

export const useUpdateRoom = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, payload }) =>
            roomApi.update(id, payload),

        onSuccess: () => {

            toast.success("Room updated successfully");

            queryClient.invalidateQueries({
                queryKey: QUERY_KEY,
            });

        }

    });

};

export const useDeleteRoom = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: roomApi.remove,

        onSuccess: () => {

            toast.success("Room deleted successfully");

            queryClient.invalidateQueries({
                queryKey: QUERY_KEY,
            });

        }

    });

};