import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

// READ
export async function getNews(page = 1) {
  const response = await api.get(`/news?page=${page}`);
  return response.data;
}

export async function getNewsById(id) {
  const response = await api.get(`/news/${id}`);
  return response.data;
}

// CREATE
export async function createNews(data) {
  const response = await api.post("/news", data);
  return response.data;
}

// UPDATE
export async function updateNews(id, data) {
  const response = await api.put(`/news/${id}`, data);
  return response.data;
}

// DELETE
export async function deleteNews(id) {
  const response = await api.delete(`/news/${id}`);
  return response.data;
}

export default api;