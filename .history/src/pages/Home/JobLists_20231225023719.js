import React, { useEffect } from 'react';
import JobListItem from './JobListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../features/jobFindSlice';

const JobLists = () => {
    const dispatch = useDispatch()
    const { jobs, isError, erro, isLoading } = useSelector((state) => state.job)

    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch])


    return (
        <div className="jobs-list">
            <JobListItem />

        </div>
    );
};

export default JobLists;