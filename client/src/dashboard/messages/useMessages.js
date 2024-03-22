import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../../services/apiContact";

export function useMessages() {
  const { data, isLoading, error } = useQuery({
    queryFn: getMessages,
    queryKey: ["messages"],
  });

  return { data, isLoading, error };
}
