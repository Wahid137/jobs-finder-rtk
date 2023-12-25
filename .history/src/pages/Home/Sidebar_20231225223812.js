import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <a href="/jobs" className="main-menu menu-active" id="lws-alljobs-menu">
                            <i className="fa-solid fa-briefcase"></i>
                            <Link to="/"><span> All Available Jobs</span></Link>
                        </a>
                        <ul className="space-y-6 lg:space-y-2 ">
                            <li>
                                <p className="sub-menu" id="lws-internship-menu">
                                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                    Internship
                                </p>
                            </li>
                            <li>
                                <p className="sub-menu" id="lws-fulltime-menu">
                                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                    Full Time
                                </p>
                            </li>
                            <li>
                                <p className="sub-menu" id="lws-remote-menu">
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