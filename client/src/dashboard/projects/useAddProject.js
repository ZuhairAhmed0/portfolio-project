import { useMutation } from "@tanstack/react-query";
import { addProject as addProjectApi } from "../../services/apiProjects";

export function useAddProject() {
  const { mutate: addProject, isLoading: isCreatting } = useMutation({
    mutationFn: addProjectApi,
    mutationKey: ["projects"],
  });

  return { addProject, isCreatting };
}
