import axios from "axios";

const apiAxios = axios.create({
    baseURL: "http://192.168.100.76:8080",
    data: {},
    headers: {}
})

export default apiAxios;
