import baseApi from "../api/axios";
export async function getMyServices() {
  const response = await baseApi.get("/services");

  return response.data;
}

export async function addService(data) {
  const response = await baseApi.post("/services", data);

  return response.data;
}

export async function updateService(data) {
  const response = await baseApi.put("/services/edit", data);

  return response.data;
}

export async function deleteService(id) {
  const response = await baseApi.delete(`/services/delete/${id}`);

  return response.data;
}
