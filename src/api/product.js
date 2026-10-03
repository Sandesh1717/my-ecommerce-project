import { Api } from "./api";

export const fetchProducts = () => {
  return Api.get("/products");
};