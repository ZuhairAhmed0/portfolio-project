import { useMutation } from "@tanstack/react-query";
import { deleteProject as deleteProjectApi } from "../../services/apiProjects";

export function useDeleteProject() {
  const { mutate: deleteProject, isLoading: isDeletting } = useMutation({
    mutationFn: deleteProjectApi,
    mutationKey: ["projects"],
  });

  return { deleteProject, isDeletting };
}
