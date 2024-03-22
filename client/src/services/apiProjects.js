import baseApi from "../api/axios";
export async function getProjects() {
  const response = await baseApi.get("/projects");

  return response.data;
}

export async function addProject(data) {
  const response = await baseApi.post("/projects", data);

  return response.data;
}

export async function updateProject(data) {
  const response = await baseApi.put("/projects/edit", data);

  return response.data;
}

export async function deleteProject(id) {
  const response = await baseApi.delete(`/projects/delete/${id}`);

  return response.data;
}
