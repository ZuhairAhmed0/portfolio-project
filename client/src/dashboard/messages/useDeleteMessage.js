import { useMutation } from "@tanstack/react-query";
import { deleteMessage as deleteMessageApi } from "../../services/apiContact";
import { useSelector } from "react-redux";

export function useDeleteMessage() {
  const { accessToken } = useSelector((store) => store.about);
  const { mutate: deleteMessage, isLoading: isDeletting } = useMutation({
    mutationFn: (id) => deleteMessageApi(id,accessToken),
    mutationKey: ["messages"],
  });

  return { deleteMessage, isDeletting };
}
