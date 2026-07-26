import {
    useQuery,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { roomTypeApi } from "../api/roomTypeApi";

const QUERY_KEY = ["room-types"];

/**
 * Get All Room Types
 */
export const useRoomTypes = () => {

    return useQuery({

        queryKey: QUERY_KEY,

        queryFn: roomTypeApi.getAll,

        staleTime: 5 * 60 * 1000,

        refetchOnWindowFocus: false,

    });

};

/**
 * Get Room Type By Id
 */
export const useRoomType = (id) => {

    return useQuery({

        queryKey: [...QUERY_KEY, id],

        queryFn: () => roomTypeApi.getById(id),

        enabled: !!id,

    });

};

/**
 * Create Room Type
 */
export const useCreateRoomType = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: roomTypeApi.create,

        onSuccess: () => {

    toast.success("Room Type created successfully");

    queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
    });

}

    });

};

/**
 * Update Room Type
 */
export const useUpdateRoomType = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, payload }) =>
            roomTypeApi.update(id, payload),

       onSuccess: () => {

    toast.success("Room Type created successfully");

    queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
    });

}

    });

};

/**
 * Delete Room Type
 */
export const useDeleteRoomType = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: roomTypeApi.remove,

       onSuccess: () => {

    toast.success("Room Type created successfully");

    queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
    });

}

    });

};