import { useMutation } from "@tanstack/react-query";
import { createMessage as createMessageApi } from "../../services/apiContact";

export function useCreateMessage() {
  const {
    mutate: createMessage,
    isLoading: isCreating,
    error,
  } = useMutation({
    mutationFn: createMessageApi,
    mutationKey: ["message"],
  });
  return { createMessage, isCreating, error };
}
