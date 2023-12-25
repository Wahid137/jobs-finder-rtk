import React from 'react';
import Navbar from '../../pages/Home/Navbar';
import Sidebar from '../../pages/Home/Sidebar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
                <Sidebar />
                <div className="lg:pl-[14rem]  mt-[5.8125rem]">
                    <Outlet />

                </div>
            </div>
        </>



    );
};

export default Main;