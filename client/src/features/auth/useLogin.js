import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAbout";

export function useLogin() {
  const { mutate: login, isLoading } = useMutation({
    mutationKey: ["about"],
    mutationFn: loginApi,
  });

  return { login, isLoading };
}
