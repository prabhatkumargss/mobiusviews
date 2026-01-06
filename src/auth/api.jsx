import axios from "axios";

const url = "http://192.168.100.20:6700";
const clientToken = "fcc68b18ce6a920c9eed604446516e58debab0796403ba19caaad6967d42739a";
const BASE_URL = `${url}/DataCollector`;

// Create Axios instance
const apiInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': clientToken,
    },
});


// Reusable GET function
export const getData = async (endpoint) => {
    try {
        const response = await apiInstance.get(endpoint);
        return response;
    } catch (error) {
        console.error("GET error:", error);
        throw error;
    }
};


// Reusable POST function
export const postData = async (endpoint, data ) => {
    try {
        const response = await apiInstance.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error("POST error:", error);
        throw error;
    }
};

