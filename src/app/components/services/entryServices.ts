import axios from "axios";

const baseURL = "https://localhost:7104/api/Entry";
console.log("API URL:", baseURL);

// export const LoadEntries = () => {
//     return axios.get(baseURL)
//     .then(response => response.data)
// }

export const LoadEntries = () => {
    return axios.get(baseURL)
      .then(response => {
        const data = response.data;
        console.log('Data from LoadEntries:', data);
        return data; // Return the data after logging
      })
      .catch(error => {
        console.error('Error in LoadEntries:', error);
        throw error; // Re-throw the error to propagate it to the next catch block
      });
  }


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