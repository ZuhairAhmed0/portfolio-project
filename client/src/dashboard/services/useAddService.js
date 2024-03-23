import { useMutation } from "@tanstack/react-query";
import { addService as addServiceApi } from "../../services/apiServices";
import { useSelector } from "react-redux";

export function useAddService() {
  const { accessToken } = useSelector((store) => store.about);

  const { mutate: addService, isLoading: isCreatting } = useMutation({
    mutationFn: data => addServiceApi(data, accessToken),
    mutationKey: ["services"],
  });

  return {addService, isCreatting};
}
