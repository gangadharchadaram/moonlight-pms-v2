import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import guestService from "../api/guestService";

export const useDeleteGuest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: guestService.remove,

    onSuccess: () => {
      toast.success("Guest deleted");

      queryClient.invalidateQueries({
        queryKey: ["guests"],
      });
    },

    onError: () => {
      toast.error("Unable to delete guest.");
    },
  });
};