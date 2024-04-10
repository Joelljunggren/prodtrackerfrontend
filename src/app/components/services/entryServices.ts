import axios from "axios";
import { Entry } from "../Entry";

const baseURL = "https://localhost:7104/api/Entry";
console.log("API URL:", baseURL);

export const LoadEntries = () => {
    return axios.get(baseURL)
    .then(response => response.data)
}

export const DeleteEntry = (entryId: number) => {
    return axios.delete(`${baseURL}/${entryId}`)
    .then(response => response.data)
}

export const CalculateAverageProductivity = async () => {
    const response = await axios.get<number>(`${baseURL}/Average Productivity`);
    return response.data;
}

export const CalculateAverageStress = async () => {
    const response = await axios.get<number>(`${baseURL}/Average Stress`);
    return response.data;
}

export const CreateEntry = (entry: Entry) => {
    return axios.post(baseURL, entry)
    .then(response => response.data)
}
