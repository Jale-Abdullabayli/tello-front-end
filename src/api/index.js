import axios from "axios"

const instance = axios.create({
  baseURL: "https://e-commerce-tello.herokuapp.com/api/v1"
})

instance.interceptors.request.use(function (config) {

  const user = JSON.parse(localStorage.getItem("auth"));

  config.headers["authorization"] = `Bearer ${user?.data?.token}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default instance;