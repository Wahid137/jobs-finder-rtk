import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { statusChanged } from '../../features/jobFindSlice';

const Sidebar = () => {
    const dispatch = useDispatch();

    const handleStatusChanged = (status) => {
        dispatch(statusChanged(status))
    }

    return (
        <div className="sidebar">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <p onClick={() => handleStatusChanged("Internship")} className="main-menu menu-active" id="lws-alljobs-menu">
                            <i className="fa-solid fa-briefcase"></i>
                            <Link to="/"><span> All Available Jobs</span></Link>
                        </p>
                        <ul className="space-y-6 lg:space-y-2 ">
                            <li>
                                <p onClick={() => handleStatusChanged("Internship")} className="sub-menu cursor-pointer" id="lws-internship-menu">
                                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                    Internship
                                </p>
                            </li>
                            <li>
                                <p onClick={() => handleStatusChanged("Full Time")} className="sub-menu cursor-pointer" id="lws-fulltime-menu">
                                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    Full Time
                                </p>
                            </li>
                            <li>
                                <p onClick={() => handleStatusChanged("Remote")} className="sub-menu cursor-pointer" id="lws-remote-menu">
                                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                    Remote
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/addnew" className="main-menu" id="lws-addJob-menu">
                            <i className="fa-solid fa-file-circle-plus"></i>
                            <span>Add NewJob</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;