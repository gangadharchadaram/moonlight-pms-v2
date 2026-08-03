import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

import toast from "react-hot-toast";

import { buildingApi } from "../api/buildingApi";

const QUERY_KEY = ["buildings"];

export const useBuildings = () =>

    useQuery({

        queryKey: QUERY_KEY,

        queryFn: buildingApi.getAll,

        staleTime: 5 * 60 * 1000,

        refetchOnWindowFocus: false

    });

export const useActiveBuildings = () =>

    useQuery({

        queryKey: [...QUERY_KEY, "active"],

        queryFn: buildingApi.getActive

    });

export const useBuilding = (id) =>

    useQuery({

        queryKey: [...QUERY_KEY, id],

        queryFn: () => buildingApi.getById(id),

        enabled: !!id

    });

export const useCreateBuilding = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: buildingApi.create,

        onSuccess: () => {

            toast.success(
                "Building created successfully"
            );

            queryClient.invalidateQueries({
                queryKey: QUERY_KEY
            });

        }

    });

};

export const useUpdateBuilding = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: ({ id, payload }) =>
            buildingApi.update(id, payload),

        onSuccess: () => {

            toast.success(
                "Building updated successfully"
            );

            queryClient.invalidateQueries({
                queryKey: QUERY_KEY
            });

        }

    });

};

export const useDeleteBuilding = () => {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: buildingApi.remove,

        onSuccess: () => {

            toast.success(
                "Building deleted successfully"
            );

            queryClient.invalidateQueries({
                queryKey: QUERY_KEY
            });

        }

    });

};