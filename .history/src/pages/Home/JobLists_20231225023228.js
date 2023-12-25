import React, { useEffect } from 'react';
import JobListItem from './JobListItem';
import { useDispatch, useSelector } from 'react-redux';

const JobLists = () => {
    const dispatch = useDispatch()
    const { jobs, isError, erro, isLoading } = useSelector((state) => state.job)
    console.log(jobs)


    useEffect(() => {

    })

    return (
        <div className="jobs-list">
            <JobListItem />

        </div>
    );
};

export default JobLists;