import baseApi from "../api/axios";
export async function getMyServices() {
  const response = await baseApi.get("/services");

  return response.data;
}

export async function addService(data, accessToken) {
  const response = await baseApi.post("/services", data,  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}

export async function updateService(data, accessToken) {
  const response = await baseApi.put("/services/edit", data,  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}

export async function deleteService(id, accessToken) {
  const response = await baseApi.delete(`/services/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}
