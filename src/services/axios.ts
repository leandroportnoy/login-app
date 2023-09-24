import axios from "axios";

const baseURL = `https://dummyjson.com`

export const apiClient = axios.create({
    baseURL: baseURL + `/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});
