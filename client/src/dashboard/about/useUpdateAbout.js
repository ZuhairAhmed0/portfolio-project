import { useMutation } from "@tanstack/react-query";
import { updateAboutInfo as updateAboutInfoApi } from "../../services/apiAbout";
import { useSelector } from "react-redux";

export function useUpdateAbout() {
  const { accessToken } = useSelector((store) => store.about);
  const {
    mutate: updateAboutInfo,
    isLoading: isUpdatting,
    error,
  } = useMutation({
    mutationFn: (data) => updateAboutInfoApi(data, accessToken),
    mutationKey: ["about"],
  });

  return { updateAboutInfo, isUpdatting, error };
}
