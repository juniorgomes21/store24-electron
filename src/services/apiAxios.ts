import axios from "axios";

const apiAxios = axios.create({
    baseURL: "http://localhost:9888",
    data: {},
    headers: {}
})

export default apiAxios;
