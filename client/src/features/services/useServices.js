import { getMyServices } from "../../services/apiServices";
import { useQuery } from "@tanstack/react-query";

export function useMyServices() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["services"],
    queryFn: getMyServices,
  });


  return {isLoading, data, error}
}
