import baseApi from "../api/axios";

export async function createMessage(body) {
  const response = await baseApi.post("/message", body);

  return response.data;
}

export async function getMessages() {
  const response = await baseApi.get("/messages");

  return response.data;
}

export async function deleteMessage(id) {
  const response = await baseApi.delete(`/messages/${id}`);

  return response.data;
}
