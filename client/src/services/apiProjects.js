import baseApi from "../api/axios";
export async function getProjects() {
  const response = await baseApi.get("/projects");

  return response.data;
}

export async function addProject(data, accessToken) {
  const response = await baseApi.post("/projects", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}

export async function updateProject(data, accessToken) {
  const response = await baseApi.put("/projects/edit", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}

export async function deleteProject(id, accessToken) {
  const response = await baseApi.delete(`/projects/delete/${id}`,  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}
