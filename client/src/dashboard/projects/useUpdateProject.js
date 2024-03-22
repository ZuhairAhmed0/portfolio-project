import { useMutation } from "@tanstack/react-query";
import { updateProject as updateProjectApi } from "../../services/apiProjects";

export function useUpdateProject() {
  const { mutate: updateProject, isLoading: isUpdatting } = useMutation({
    mutationKey: ["projects"],
    mutationFn: updateProjectApi,
  });

  return { updateProject, isUpdatting };
}
