import { Tab } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import IconUser from '../../../../components/Icon/IconUser';
import IconPhone from '../../../../components/Icon/IconPhone';
import IconHome from '../../../../components/Icon/IconHome';
import LeadOverview from './LeadOverview';
import LeadAppointment from './LeadAppointment';
import LeadComments from './LeadComments';

const Data = [
    {
        id: 1,
        text: 'Complete Name',
        name: 'Kelly Young',
    },
    {
        id: 2,
        text: 'Branch',
        name: 'Andy King',
    },
    {
        id: 3,
        text: 'Email',
        name: 'Judy Holmes',
    },
    {
        id: 4,
        text: 'Owner',
        name: 'Vincent Carpenter',
    },
    {
        id: 5,
        text: 'Date of Birth',
        name: 'Mary McDonald',
    },
    {
        id: 6,
        text: 'Phone No',
        name: 'Mary McDonald',
    },
    {
        id: 7,
        text: 'Home No',
        name: 'Mary McDonald',
    },
    {
        id: 8,
        text: 'Qualification',
        name: 'Mary McDonald',
    },
    {
        id: 9,
        text: 'Institute Name',
        name: 'Mary McDonald',
    },
    {
        id: 10,
        text: 'Lead Source',
        name: 'Mary McDonald',
    },
];

const LeadViewModal = ({ setleadViewModal }) => {

    const getCurrentTime = () => {
        const now = new Date();
        // Format the time as HH:MM (24-hour format)
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const currentTime = getCurrentTime();

    const formatDate = (date) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };

    const rowData2 = [
        {
            id: 1,
            date: '2004-05-28',
            time: currentTime,
            isActive: true,
            company: 'Yes, No',
            Offsest: '10 Mint',
            mode: 'Email',
        },
        {
            id: 2,
            date: '2004-05-28',
            time: currentTime,
            isActive: true,
            company: 'Yes, No',
            Offsest: '10 Mint',
            mode: 'Email',
        },
        {
            id: 3,
            date: '2004-05-28',
            time: currentTime,
            isActive: true,
            company: 'Yes, No',
            Offsest: '10 Mint',
            mode: 'Email',
        },
        {
            id: 4,
            date: '2004-05-28',
            time: currentTime,
            isActive: true,
            company: 'Yes, No',
            Offsest: '10 Mint',
            mode: 'Email',
        },
        {
            id: 5,
            date: '2004-05-28',
            time: currentTime,
            isActive: true,
            company: 'Yes, No',
            Offsest: '10 Mint',
            mode: 'Email',
        },
    ];

    return (
        <>
            <Tab.Group>
                <Tab.List className="mt-3 flex flex-wrap gap-2">
                    <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                                className={`${selected ? 'bg-info text-white !outline-none' : ''}
                                                    before:inline-block' -mb-[1px] flex items-center rounded p-3.5 py-2 hover:bg-info hover:text-white`}
                            >
                                <IconUser className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                Lead Overview
                            </button>
                        )}
                    </Tab>
                    <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                                className={`${selected ? 'bg-info text-white !outline-none' : ''}
                                                    before:inline-block' -mb-[1px] flex items-center rounded p-3.5 py-2 hover:bg-info hover:text-white`}
                            >
                                <IconPhone className="ltr:mr-2 rtl:ml-2" />
                                Appointment
                            </button>
                        )}
                    </Tab>
                    <Tab as={Fragment}>
                        {({ selected }) => (
                            <button
                                className={`${selected ? 'bg-info text-white !outline-none' : ''}
                                                    before:inline-block' -mb-[1px] flex items-center rounded p-3.5 py-2 hover:bg-info hover:text-white`}
                            >
                                <IconHome className="ltr:mr-2 rtl:ml-2" />
                                Comment Sheet
                            </button>
                        )}
                    </Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <LeadOverview
                            Data={Data}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <LeadAppointment
                            formatDate={formatDate}
                            rowData2={rowData2}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <LeadComments />
                    </Tab.Panel>
                </Tab.Panels>
                <div className="mt-4 mb-2 flex absolute bottom-2 right-4">
                    <button onClick={() => setleadViewModal(false)} type="button" className="btn btn-outline-danger">
                        Discard
                    </button>
                    <button onClick={() => setleadViewModal(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                        Save
                    </button>
                </div>
            </Tab.Group>
        </>
    )
}

export default LeadViewModal;
