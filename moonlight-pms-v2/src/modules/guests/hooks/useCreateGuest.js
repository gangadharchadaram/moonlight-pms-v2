import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import guestService from "../api/guestService";

export const useCreateGuest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: guestService.create,

    onSuccess: () => {
      toast.success("Guest created successfully");

      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },

    onError: (error) => {
      toast.error(
        error?.response?.data?.message ||
        "Unable to create guest."
      );
    },
  });
};