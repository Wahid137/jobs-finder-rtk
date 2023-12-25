import React, { useEffect } from 'react';
import JobListItem from './JobListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../features/jobFindSlice';

const JobLists = () => {
    const dispatch = useDispatch()
    const { jobs, isError, error, isLoading, status } = useSelector((state) => state.job)

    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch])

    const filterByStatus = (job) => {
        switch (status) {
            case "Internship":
                return jobs.filter((job) => job.type === status)

            default:
                break;
        }
    }

    //decide what to do
    let content = null;
    if (isLoading) content = <p>Loading...!!!</p>

    if (!isLoading && isError)
        content = <p className='error'>There was an error occured</p>

    if (!isLoading && !isError && jobs.length > 0)
        content = jobs.filter(filterByStatus).map((job) => <JobListItem key={job.id} job={job} />)

    if (!isLoading && !isError && jobs.length === 0)
        content = <p>No transaction found!</p>



    return (
        <div className="jobs-list">
            {content}

        </div>
    );
};

export default JobLists;