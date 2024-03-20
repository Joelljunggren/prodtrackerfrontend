import axios from "axios";

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

// export const DeleteEntry = (entryId: number) => {
//     const url = `${baseURL}/${entryId}`;
//     console.log('Delete URL:', url);
  
//     return axios.delete(url)
//       .then(response => response.data)
//       .catch(error => {
//         console.error('Error deleting entry:', error);
//         throw error;
//       });
//   };


// export const CreateEntry = (entry: { 
//     productivityLevel: number, 
//     stressLevel: number,
//     message: string,
//     entryDate: Date} ) => {
//     return axios.post(baseURL, {
//         productivityLevel: entry.productivityLevel,
//         stressLevel: entry.stressLevel,
//         message: entry.message,
//         entryDate: entry.entryDate
//     }).then(response => response.data)
// }