import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8088/v1";

export default axios.create({
    baseURL: baseURL
});