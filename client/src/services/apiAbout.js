import baseApi from "../api/axios";
export async function getAboutInfo() {
  const response = await baseApi.get("/aboutme");

  return response.data;
}

export async function updateAboutInfo(data) {
  const response = await baseApi.post("/aboutme", data);

  return response.data;
}
