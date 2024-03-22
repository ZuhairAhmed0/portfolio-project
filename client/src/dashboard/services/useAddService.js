import { useMutation } from "@tanstack/react-query";
import { addService as addServiceApi } from "../../services/apiServices";

export function useAddService() {
  const { mutate: addService, isLoading: isCreatting } = useMutation({
    mutationFn: addServiceApi,
    mutationKey: ["services"],
  });

  return {addService, isCreatting};
}
