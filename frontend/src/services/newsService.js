import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export async function getNews(page = 1) {
  const response = await api.get(`/news?page=${page}`);
  return response.data;
}

export async function getNewsById(id) {
  const response = await api.get(`/news/${id}`);
  return response.data;
}

export default api;