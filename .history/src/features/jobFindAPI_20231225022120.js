import axios from "../../src/utils/axios";


export const getJobs = async () => {
    const response = await axios.get("/jobs");
    return response.data;
}

export const addJob = async (data) => {
    const response = await axios.post("/jobs", data)
    return response.data;
}

export const editJob = async (id, data) => {
    const response = await axios.put(`/jobs/${id}`, data);
    return response.data;
}

export const deleteTransaction = async (id) => {
    const response = axios.delete(`/transactions/${id}`);
    return response.data;
}