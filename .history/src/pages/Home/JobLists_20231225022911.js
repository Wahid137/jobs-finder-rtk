import React from 'react';
import JobListItem from './JobListItem';
import { useSelector } from 'react-redux';

const JobLists = () => {
    const { jobs, isError, erro, isLoading } = useSelector((state) => state.job)
    return (
        <div className="jobs-list">
            <JobListItem />

        </div>
    );
};

export default JobLists;