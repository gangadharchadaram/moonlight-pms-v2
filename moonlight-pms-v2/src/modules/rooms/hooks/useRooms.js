import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api/roomApi";

export const useRooms = () => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
    staleTime: 5 * 60 * 1000,
  });
};