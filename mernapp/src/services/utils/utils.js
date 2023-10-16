import axios from "axios";

const baseURL = "http://localhost:5000/api";
const axiosInstance = axios.create({
  baseURL,
  //   timeout: 60 * 1000,
});

axiosInstance.interceptors.request.use(async (config) => {
  config.headers = {
    "content-type": "application/json",
    source: "GBW",

    // timeout: 2000,
    ...config.headers,
  };
  return config;
});
axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return error;
  }
);

const post = (url, reqObj, args) => {
  return axiosInstance.post(url, reqObj, args);
};
const put = (url, reqObj, args) => {
  return axiosInstance.put(url, reqObj, args);
};

const get = (url, args) => {
  return axiosInstance.get(url, args);
};

export { post, get, put };
