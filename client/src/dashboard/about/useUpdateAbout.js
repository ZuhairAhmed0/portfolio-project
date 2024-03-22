import { useMutation } from "@tanstack/react-query";
import { updateAboutInfo as updateAboutInfoApi } from "../../services/apiAbout";

export function useUpdateAbout() {
  const {
    mutate: updateAboutInfo,
    isLoading: isUpdatting,
    error,
  } = useMutation({
    mutationFn: updateAboutInfoApi,
    mutationKey: ["about"],
  });

  return { updateAboutInfo, isUpdatting, error };
}
