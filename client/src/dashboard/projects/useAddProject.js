import { useMutation } from "@tanstack/react-query";
import { addProject as addProjectApi } from "../../services/apiProjects";
import { useSelector } from "react-redux";

export function useAddProject() {
  const { accessToken } = useSelector((store) => store.about);
  const { mutate: addProject, isLoading: isCreatting } = useMutation({
    mutationFn: (data) => addProjectApi(data, accessToken),
    mutationKey: ["projects"],
  });

  return { addProject, isCreatting };
}
