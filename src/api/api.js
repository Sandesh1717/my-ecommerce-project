import axios from "axios";

const URL = "https://dummyjson.com";

export const Api = axios.create({
  baseURL: URL,
});