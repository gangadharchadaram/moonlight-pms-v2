import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import guestService from "../api/guestService";

export const useUpdateGuest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }) =>
      guestService.update(id, payload),

    onSuccess: () => {
      toast.success("Guest updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },

    onError: () => {
      toast.error("Unable to update guest.");
    },
  });
};