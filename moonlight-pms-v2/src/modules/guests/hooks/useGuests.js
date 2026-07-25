import { useQuery } from "@tanstack/react-query";
import guestService from "../api/guestService";

export const useGuests = (filters = {}) => {
  return useQuery({
    queryKey: ["guests", filters],
    queryFn: async () => {
      const response = await guestService.getAll(filters);
      return response.data;
    },
  });
};