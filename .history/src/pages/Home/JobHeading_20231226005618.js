import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJobs, searchJobs, sortJobs } from '../../features/jobFindSlice';

const JobHeading = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");

    const handleInput = (event) => {
        setSearchValue(event.target.value);
        dispatch(searchJobs(searchValue));
    };
    if (searchValue === "") {
        dispatch(fetchJobs());
    }

    const handleSortJobs = (task) => {
        dispatch(sortJobs(task))
    }

    return (
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
            <h1 className="lws-section-title">All Available Jobs</h1>
            <div className="flex gap-4">
                <div className="search-field group flex-1">
                    <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                    <input onChange={handleInput} type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" />
                </div>
                <select onClick={(e) => handleSortJobs(e.target.value)} id="lws-sort" name="sort" autoComplete="sort" className="flex-1">
                    <option value="">Default</option>
                    <option value="low_high">Salary (Low to High)</option>
                    <option value="high_low">Salary (High to Low)</option>
                </select>
            </div>
        </div>
    );
};

export default JobHeading;