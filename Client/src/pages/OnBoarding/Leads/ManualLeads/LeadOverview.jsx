import React from 'react';

const LeadOverview = ({ Data }) => {
    return (
        <>
            <div className="active pt-5">
                <div className="">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                        <div>
                            <ul id="example1">
                                {Data?.slice(0, Math.ceil(Data.length / 2)).map((item) => (
                                    <li key={item.id} className="mb-2.5 cursor-grab">
                                        <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:md:text-left rtl:md:text-right text-center items-md-center">
                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                <img alt="avatar" src={`/assets/images/profile-${item.id}.jpeg`} className="w-11 h-11 rounded-full mx-auto" />
                                            </div>
                                            <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                                <div className="font-semibold md:my-0 my-3">
                                                    <div className="text-dark dark:text-[#bfc9d4] text-base">{item.text}</div>
                                                    <div className="text-white-dark text-xs">{item.name}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <ul id="example2">
                                {Data?.slice(Math.ceil(Data.length / 2)).map((item) => (
                                    <li key={item.id} className="mb-2.5 cursor-grab">
                                        <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:md:text-left rtl:md:text-right text-center items-md-center">
                                            <div className="ltr:sm:mr-4 rtl:sm:ml-4">
                                                <img alt="avatar" src={`/assets/images/profile-${item.id}.jpeg`} className="w-11 h-11 rounded-full mx-auto" />
                                            </div>
                                            <div className="flex md:flex-row flex-col justify-between items-center flex-1">
                                                <div className="font-semibold md:my-0 my-3">
                                                    <div className="text-dark dark:text-[#bfc9d4] text-base">{item.text}</div>
                                                    <div className="text-white-dark text-xs">{item.name}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeadOverview;
