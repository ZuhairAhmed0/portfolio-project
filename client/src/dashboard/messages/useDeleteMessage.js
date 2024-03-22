import { useMutation } from "@tanstack/react-query";
import { deleteMessage as deleteMessageApi } from "../../services/apiContact";

export function useDeleteMessage() {
  const { mutate: deleteMessage, isLoading: isDeletting } = useMutation({
    mutationFn: deleteMessageApi,
    mutationKey: ["messages"],
  });

  return { deleteMessage, isDeletting };
}
