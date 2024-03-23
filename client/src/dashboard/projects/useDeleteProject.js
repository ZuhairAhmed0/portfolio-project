import { useMutation } from "@tanstack/react-query";
import { deleteProject as deleteProjectApi } from "../../services/apiProjects";
import { useSelector } from "react-redux";

export function useDeleteProject() {
  const { accessToken } = useSelector((store) => store.about);
  const { mutate: deleteProject, isLoading: isDeletting } = useMutation({
    mutationFn: (id) => deleteProjectApi(id, accessToken),
    mutationKey: ["projects"],
  });

  return { deleteProject, isDeletting };
}
