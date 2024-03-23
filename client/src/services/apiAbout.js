import baseApi from "../api/axios";
export async function getAboutInfo() {
  const response = await baseApi.get("/aboutme");

  return response.data;
}

export async function updateAboutInfo(data, accessToken) {
  const response = await baseApi.post("/aboutme", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}

export async function login(data) {
  const response = await baseApi.post("/auth/login", data);

  return response.data;
}
