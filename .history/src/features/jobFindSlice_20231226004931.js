import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJob, deleteJob, editJob, getJobs } from "./jobFindAPI";


const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
    editing: {},
    status: "All",
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
        },
        statusChanged: (state, action) => {
            state.status = action.payload;
        },

        searchJobs: (state, action) => {
            state.jobs = state.jobs.filter((job) => job.title.toUpperCase().indexOf(action.payload.toUpperCase()) > -1);
        },

        sortJobs: (state, action) => {
            switch (action.payload) {
                case "high_low":
                    state.jobs = state.jobs.sort((a, b) => parseFloat(b.salary) - parseFloat(a.salary));
                    break;
                case "low_high":
                    state.jobs = state.jobs.sort((a, b) => parseFloat(a.salary) - parseFloat(b.salary));
                    break;
                default:
                    break;
            }
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
            .addCase(createJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                state.jobs.push(action.payload);
            })
            .addCase(createJob.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(changeJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(changeJob.fulfilled, (state, action) => {
                state.isError = false;
                state.isLoading = false;
                const indexToUpdate = state.jobs.findIndex((job) => job.id === action.payload.id)
                state.jobs[indexToUpdate] = action.payload;
            })
            .addCase(changeJob.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })
            .addCase(removeJob.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(removeJob.fulfilled, (state, action) => {
                console.log(action.meta.arg)
                state.isError = false;
                state.isLoading = false;
                state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg)
            })
            .addCase(removeJob.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.error = action.error?.message;
            })

    }
})

export default jobSlice.reducer;
export const { sortJobs, editActive, statusChanged, searchJobs } = jobSlice.actions;