import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://scholarbeacon-e9e51.web.app",
});
const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
