import { useMutation } from "@tanstack/react-query";
import { updateService as updateServiceApi } from "../../services/apiServices";

export function useUpdateService() {
  const {
    mutate: updateService,
    isLoading: isUpdatting,
  } = useMutation({
    mutationFn: updateServiceApi,
    mutationKey: ["services"],
  });

  return { updateService, isUpdatting };
}
