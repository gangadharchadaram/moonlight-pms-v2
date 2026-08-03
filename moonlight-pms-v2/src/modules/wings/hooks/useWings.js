import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import { wingApi } from "../api/wingApi";

const QUERY_KEY = ["wings"];

export const useWings = () =>
    useQuery({
        queryKey: QUERY_KEY,
        queryFn: wingApi.getAll,
        staleTime: 5 * 60 * 1000
    });

export const useWingsByBuilding = (buildingId) =>
    useQuery({
        queryKey: [...QUERY_KEY, buildingId],
        queryFn: () =>
            wingApi.getByBuilding(buildingId),
        enabled: !!buildingId
    });

export const useCreateWing = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: wingApi.create,

        onSuccess: () => {

            toast.success("Wing created successfully");

            queryClient.invalidateQueries({
                queryKey: QUERY_KEY
            });

        }

    });

};

export const useUpdateWing = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, payload }) =>
            wingApi.update(id, payload),

        onSuccess: () => {

            toast.success("Wing updated successfully");

            queryClient.invalidateQueries({
                queryKey: QUERY_KEY
            });

        }

    });

};

export const useDeleteWing = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: wingApi.remove,

        onSuccess: () => {

            toast.success("Wing deleted successfully");

            queryClient.invalidateQueries({
                queryKey: QUERY_KEY
            });

        }

    });

};