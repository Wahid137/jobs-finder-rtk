import React from 'react';
import JobHeading from './JobHeading';
import JobLists from './JobLists';

const Home = () => {
    return (
        <>

            <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                <JobHeading />

                <JobLists />
            </main>

        </>
    );
};

export default Home;