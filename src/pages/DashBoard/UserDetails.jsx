import React from 'react';

const UserDetails = () => {

    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);

    return (
        <>
            <div className="panel h-full flex justify-between px-5 py-5">
                <div className="flex items-start mt-2 mb-3">
                    <div className="shrink-0 ring-2 ring-white-light dark:ring-dark rounded-full ltr:mr-4 rtl:ml-4 mt-1">
                        <img src="/assets/images/profile-1.jpeg" alt="profile1" className="w-12 h-12 rounded-full object-cover" />
                    </div>
                    <div className="font-semibold">
                        <h1 className="text-2xl">Hello Usman Khan</h1>
                        <p className="text-lg text-white-dark">Branch Manager</p>
                    </div>
                </div>
                <div className="font-semibold  mt-2 mb-3">
                    <p className="text-md text-white-dark">{today}</p>
                </div>
            </div>
        </>
    )
}

export default UserDetails;
