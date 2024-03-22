import { useQuery } from "@tanstack/react-query";
import { getAboutInfo } from "../../services/apiAbout";

export function useAboutInfo() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["about"],
    queryFn: getAboutInfo,
  });

  return { isLoading, data, error };
}
