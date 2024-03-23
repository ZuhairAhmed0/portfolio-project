import baseApi from "../api/axios";

export async function createMessage(body) {
  const response = await baseApi.post("/message", body);

  return response.data;
}

export async function getMessages(accessToken) {
  const response = await baseApi.get("/messages", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}

export async function deleteMessage(id, accessToken) {
  const response = await baseApi.delete(`/messages/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}
