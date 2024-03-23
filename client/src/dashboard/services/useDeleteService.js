import { useMutation } from "@tanstack/react-query";
import { deleteService as deleteServiceApi } from "../../services/apiServices";
import { useSelector } from "react-redux";

export function useDeleteService() {
  const { accessToken } = useSelector((store) => store.about);

  const { mutate: deleteService, isLoading: isDeletting } = useMutation({
    mutationFn: id => deleteServiceApi(id, accessToken),
    mutationKey: ["services"],
  });

  return { deleteService, isDeletting };
}
