import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../../services/apiContact";
import { useSelector } from "react-redux";

export function useMessages() {
  const { accessToken } = useSelector((store) => store.about);
  const { data, isLoading, error } = useQuery({
    queryFn: () => getMessages(accessToken),
    queryKey: ["messages"],
  });

  return { data, isLoading, error };
}
