import axios from "axios";

const token =
  "b027b3ed38739a1d01c2ac05008f0cb4e7a764acc802e0cfb1e5bf1a4876597c";

const api = axios.create({
  baseUrl: "https://sandboxapi.codingitwrong.com/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
