import { useMutation } from "@tanstack/react-query";
import { deleteService as deleteServiceApi } from "../../services/apiServices";

export function useDeleteService() {
  const { mutate: deleteService, isLoading: isDeletting } = useMutation({
    mutationFn: deleteServiceApi,
    mutationKey: ["services"],
  });

  return { deleteService, isDeletting };
}
