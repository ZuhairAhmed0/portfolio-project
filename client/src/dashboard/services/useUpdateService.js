import { useMutation } from "@tanstack/react-query";
import { updateService as updateServiceApi } from "../../services/apiServices";
import { useSelector } from "react-redux";

export function useUpdateService() {
  const { accessToken } = useSelector((store) => store.about);

  const { mutate: updateService, isLoading: isUpdatting } = useMutation({
    mutationFn: (data) => updateServiceApi(data, accessToken),
    mutationKey: ["services"],
  });

  return { updateService, isUpdatting };
}
