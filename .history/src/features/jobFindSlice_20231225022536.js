import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, deleteJob, editJob, getJobs } from "./jobFindAPI";


const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {},
}
export const fetchJobs = createAsyncThunk("job/fetchJobs", async () => {
    const jobs = await getJobs();
    return jobs;
})
export const createJob = createAsyncThunk("job/createJobs", async (data) => {
    const job = await addJob(data);
    return job;
})
export const changeJob = createAsyncThunk("job/changeJob", async ({ id, data }) => {
    const job = await editJob(id, data);
    return job;
})
export const removeJob = createAsyncThunk("job/removeJob", async (id) => {
    const job = await deleteJob(id);
    return job;
})
//create slice
const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.editing = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
                state.jobs = [];
            })
            .addCase(createJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(createjob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs.push(action.payload);
            })
            .addCase(createjob.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(changejob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(changejob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                const indexToUpdate = state.jobs.findIndex((job) => job.id === action.payload.id)
                state.jobs[indexToUpdate] = action.payload;
            })
            .addCase(changejob.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(removejob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(removejob.fulfilled, (state, action) => {
                console.log(action.meta.arg)
                state.isError = false;
                state.isLoading = false;
                state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg)
            })
            .addCase(removejob.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })

    }
})

export default jobSlice.reducer;
export const { editActive, editInActive } = jobSlice.actions;