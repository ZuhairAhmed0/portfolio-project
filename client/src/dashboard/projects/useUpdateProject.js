import { useMutation } from "@tanstack/react-query";
import { updateProject as updateProjectApi } from "../../services/apiProjects";
import { useSelector } from "react-redux";

export function useUpdateProject() {
  const { accessToken } = useSelector((store) => store.about);
  const { mutate: updateProject, isLoading: isUpdatting } = useMutation({
    mutationKey: ["projects"],
    mutationFn: (data) => updateProjectApi(data, accessToken),
  });

  return { updateProject, isUpdatting };
}
