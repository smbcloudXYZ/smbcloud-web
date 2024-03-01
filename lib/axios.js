import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL_API || "http://localhost:8088/v1/";
const axiosClient = axios.create({
    baseURL: baseURL
});
axiosClient.interceptors.request.use(async (config) => {
    // Pass default client id and secret key
    config.params = {
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        ...config.params
    }
    return config;
});

export default axiosClient;