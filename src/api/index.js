import axios from "axios";
import { GetAuthorizationHeader } from "@/js/function";

const Request = axios.create({
  baseURL: "https://ptx.transportdata.tw",
});

export const get = (api, params) => {
  return new Promise((resole, reject) => {
    Request.get(api, { headers: GetAuthorizationHeader(), params })
      .then((res) => {
        resole(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
