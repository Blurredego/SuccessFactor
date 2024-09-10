import React, { Fragment } from 'react';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import Flatpickr from 'react-flatpickr';
import MaskedInput from 'react-text-mask';
import IconHome from '../../components/Icon/IconHome';
import IconUser from '../../components/Icon/IconUser';
import IconThumbUp from '../../components/Icon/IconThumbUp';
import { Tab } from '@headlessui/react';
import { alevelSubjectList } from './SubjectList';

const RegistrationForm = ({ branchesOptions, dialingCodeOptions, date1, setDate1, isRtl, setModal5, activeTab4, setActiveTab4 }) => {

    const customStyles = {
        menu: (provided) => ({
            ...provided,
            maxHeight: '200px',
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: '200px',
            overflowY: 'auto',
        }),
    };

    const namePrefix = [
        { value: 'Mr', label: 'Mr' },
        { value: 'Ms', label: 'Ms' },
        { value: 'Mrs', label: 'Mrs' },
    ];

    return (
        <>
            <div className="flex items-center justify-between bg-[#fbfbfb]  pt-4 dark:bg-[#121c2c]">
                <h5 className="text-xl font-bold">New Registration Form</h5>
            </div>
            <div className="mb-5 mt-4">
                <div className="inline-block w-full">
                    <div className="relative z-[1]">
                        <div
                            className={`${activeTab4 === 1
                                ? 'w-[3%]'
                                : activeTab4 === 2
                                    ? 'w-[13%]' // Adjusted to fit 11 tabs
                                    : activeTab4 === 3
                                        ? 'w-[21%]'
                                        : activeTab4 === 4
                                            ? 'w-[31.3%]' // Adjusted to fit 11 tabs
                                            : activeTab4 === 5
                                                ? 'w-[40.7%]' // Adjusted to fit 11 tabs
                                                : activeTab4 === 6
                                                    ? 'w-[50%]'
                                                    : activeTab4 === 7
                                                        ? 'w-[58.3%]' // Adjusted to fit 11 tabs
                                                        : activeTab4 === 8
                                                            ? 'w-[66.7%]' // Adjusted to fit 11 tabs
                                                            : activeTab4 === 9
                                                                ? 'w-[78%]'
                                                                : activeTab4 === 10
                                                                    ? 'w-[86.3%]' // Adjusted to fit 11 tabs
                                                                    : activeTab4 === 11
                                                                        ? 'w-[94.7%]' // Adjusted to fit 11 tabs
                                                                        : ''
                                } bg-primary h-1 absolute ltr:left-0 rtl:right-0 top-[16px] m-auto -z-[1] transition-[width]`}
                        ></div>
                        {/* <ul className="mb-5 grid grid-cols-11">
                            <li className="mx-auto flex flex-col items-center">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 1 ? '!border-primary !bg-primary text-white' : ''}
                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-9 h-9 rounded-full`}
                                    onClick={() => setActiveTab4(1)}
                                >
                                    <IconHome className="w-4 h-4" />
                                </button>
                                <span
                                    className={`${activeTab4 === 1 ? 'text-primary' : ''} text-xs mt-1`}
                                >
                                    Registration
                                </span>
                            </li>

                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 2 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-9 h-9 rounded-full`}
                                    onClick={() => setActiveTab4(2)}
                                >
                                    <IconHome className="w-4 h-4" />
                                </button>
                                <span className={`${activeTab4 === 2 ? 'text-primary ' : ''}text-center block mt-2`}>Personal</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 3 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-9 h-9 rounded-full`}
                                    onClick={() => setActiveTab4(3)}
                                >
                                    <IconUser className="w-4 h-4" />
                                </button>
                                <span className={`${activeTab4 === 3 ? 'text-primary ' : ''}text-center block mt-2`}>Qualification</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 4 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-9 h-9 rounded-full`}
                                    onClick={() => setActiveTab4(4)}
                                >
                                    <IconHome className="w-4 h-4" />
                                </button>
                                <span className={`${activeTab4 === 4 ? 'text-primary ' : ''}text-center block mt-2`}>Testing</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 5 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-9 h-9 rounded-full`}
                                    onClick={() => setActiveTab4(5)}
                                >
                                    <IconHome className="w-4 h-4" />
                                </button>
                                <span className={`${activeTab4 === 5 ? 'text-primary ' : ''}text-center block mt-2`}>Entrance Test</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 6 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-9 h-9 rounded-full`}
                                    onClick={() => setActiveTab4(6)}
                                >
                                    <IconThumbUp className="w-4 h-4" />
                                </button>
                                <span className={`${activeTab4 === 6 ? 'text-primary ' : ''}text-center block mt-2`}>Country of Interest</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 7 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-9 h-9 rounded-full`}
                                    onClick={() => setActiveTab4(7)}
                                >
                                    <IconThumbUp className="w-4 h-4" />
                                </button>
                                <span className={`${activeTab4 === 7 ? 'text-primary ' : ''}text-center block mt-2`}>Reference</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 8 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-9 h-9 rounded-full`}
                                    onClick={() => setActiveTab4(8)}
                                >
                                    <IconHome className="w-4 h-4" />
                                </button>
                                <span className={`${activeTab4 === 8 ? 'text-primary ' : ''}text-center block mt-2`}>Employment</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 9 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-9 h-9 rounded-full`}
                                    onClick={() => setActiveTab4(9)}
                                >
                                    <IconThumbUp className="w-4 h-4" />
                                </button>
                                <span className={`${activeTab4 === 9 ? 'text-primary ' : ''}text-center block mt-2`}>InTake</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 10 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-9 h-9 rounded-full`}
                                    onClick={() => setActiveTab4(10)}
                                >
                                    <IconHome className="w-4 h-4" />
                                </button>
                                <span className={`${activeTab4 === 10 ? 'text-primary ' : ''}text-center block mt-2`}>Comments</span>
                            </li>
                            <li className="mx-auto">
                                <button
                                    type="button"
                                    className={`${activeTab4 === 11 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-9 h-9 rounded-full`}
                                    onClick={() => setActiveTab4(11)}
                                >
                                    <IconThumbUp className="w-4 h-4" />
                                </button>
                                <span className={`${activeTab4 === 11 ? 'text-primary ' : ''}text-center block mt-2`}>Appointment</span>
                            </li>
                        </ul> */}
                        <ul className="mb-5 grid grid-cols-11 gap-4">
                            {Array.from({ length: 11 }, (_, index) => (
                                <li key={index} className="mx-auto flex flex-col items-center">
                                    <button
                                        type="button"
                                        className={`${activeTab4 === index + 1 ? '!border-primary !bg-primary text-white' : ''}
                    border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] 
                    flex justify-center items-center w-9 h-9 rounded-full`}
                                        onClick={() => setActiveTab4(index + 1)}
                                    >
                                        {/* Replace the icons based on the tab index */}
                                        {index + 1 === 3 || index + 1 === 6 || index + 1 === 7 || index + 1 === 9 || index + 1 === 11
                                            ? <IconThumbUp className="w-4 h-4" />
                                            : <IconHome className="w-4 h-4" />
                                        }
                                    </button>
                                    <span
                                        className={`${activeTab4 === index + 1 ? 'text-primary' : ''} text-xs mt-1 text-center`}
                                    >
                                        {['Registration', 'Personal', 'Qualification', 'Testing', 'Entrance Test', 'Country of Interest', 'Reference', 'Employment', 'InTake', 'Comments', 'Appointment'][index]}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {activeTab4 === 1 &&
                            <div className="mt-3 active" id="vertical_pills">
                                <form className='w-full'>
                                    <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-14 mb-4" onChange={(date) => setDate1(date)} placeholder='Date' />
                                    <div className="w-full">
                                        <Select
                                            options={branchesOptions}
                                            isSearchable={true}
                                            placeholder="Branch"
                                            className="w-full h-14 mb-4"
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    height: '3.5rem',
                                                    width: '100%', // Ensures the control is 100% wide
                                                }),
                                                valueContainer: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the value container fills the control
                                                }),
                                                input: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the input area takes full height and width
                                                }),
                                            }}
                                        />
                                    </div>
                                </form>
                            </div>
                        }
                        {activeTab4 === 2 &&
                            <div className="mt-3" id="vertical_pills">
                                <div className="mb-5 flex flex-col sm:flex-row">
                                    <Tab.Group>
                                        <div className="mb-5 sm:mb-0 sm:flex-[0_0_20%]">
                                            <Tab.List className="space-y-2 ltr:pr-4 rtl:pl-4">
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            Student Details
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            Contact Details
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            Guardian Details
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            Address
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            Geography and Nationality
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            Visa Refusal
                                                        </button>
                                                    )}
                                                </Tab>
                                            </Tab.List>
                                        </div>
                                        <Tab.Panels className='w-full'>
                                            <Tab.Panel className='w-full'>
                                                <div className="active">
                                                    <form className='w-full'>
                                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                                            <Select
                                                                options={branchesOptions}
                                                                isSearchable={true}
                                                                placeholder="Branch"
                                                                className="w-full h-14 mb-4 lg:col-span-2"
                                                                styles={{
                                                                    ...customStyles,
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                            <Select
                                                                options={namePrefix}
                                                                isSearchable={true}
                                                                placeholder="Name Prefix"
                                                                className="w-full h-14 mb-4 lg:col-span-2"
                                                                styles={{
                                                                    ...customStyles,
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="grid grid-cols-1 xl:grid-cols-1 mb-4 h-14" id="multiple">
                                                            <div className="flex">
                                                                <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                                                    Full Name
                                                                </div>
                                                                <input type="text" placeholder="First Name" className="form-input ltr:border-r-0 rtl:border-l-0 focus:!border-r rounded-none flex-1" />
                                                                <input type="text" placeholder="Middle Name" className="form-input ltr:border-r-0 rtl:border-l-0 focus:!border-r rounded-none flex-1" />
                                                                <input type="text" placeholder="Last Name" className="form-input ltr:rounded-l-none rtl:rounded-r-none flex-1" />
                                                            </div>
                                                        </div>
                                                        <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-14 mb-4" onChange={(date) => setDate1(date)} placeholder='Date Of Birth' />
                                                        <div className="flex lg:col-span-2 h-14">
                                                            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                                                @
                                                            </div>
                                                            <input type="text" placeholder="Email" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                                            <Select
                                                                options={dialingCodeOptions}
                                                                isSearchable={true}
                                                                placeholder="Dialing Code"
                                                                className="w-full h-14 mb-4 lg:col-span-2"
                                                                styles={{
                                                                    ...customStyles,
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                            <fieldset className='lg:col-span-2'>
                                                                <MaskedInput
                                                                    id="phoneMask"
                                                                    type="text"
                                                                    placeholder="Mobile No"
                                                                    className="form-input h-14"
                                                                    mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                                />
                                                            </fieldset>
                                                        </div>
                                                        <fieldset className='lg:col-span-2'>
                                                            <MaskedInput
                                                                id="phoneMask"
                                                                type="text"
                                                                placeholder="Home Number"
                                                                className="form-input h-14"
                                                                mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                                            />
                                                        </fieldset>
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <div className="grid grid-cols-1 xl:grid-cols-1 mb-4 h-14" id="multiple">
                                                            <div className="flex">
                                                                <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                                                    Full Name
                                                                </div>
                                                                <input type="text" placeholder="First Name" className="form-input ltr:border-r-0 rtl:border-l-0 focus:!border-r rounded-none flex-1" />
                                                                <input type="text" placeholder="Middle Name" className="form-input ltr:border-r-0 rtl:border-l-0 focus:!border-r rounded-none flex-1" />
                                                                <input type="text" placeholder="Last Name" className="form-input ltr:rounded-l-none rtl:rounded-r-none flex-1" />
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                                            <input type="text" placeholder="Profession" className="form-input h-14 mb-4 w-full lg:col-span-2" />
                                                            <input type="text" placeholder="Monthly Income" className="form-input h-14 mb-4 w-full lg:col-span-2" />
                                                        </div>
                                                        <input type="text" placeholder="Address" className="form-input h-14 mb-4 w-full" />
                                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                                            <input type="text" placeholder="TelePhone No" className="form-input h-14 mb-4 w-full lg:col-span-2" />
                                                            <input type="text" placeholder="Mobile No" className="form-input h-14 mb-4 w-full lg:col-span-2" />
                                                            <input type="text" placeholder="Alternate No" className="form-input h-14 mb-4 w-full lg:col-span-4" />
                                                        </div>
                                                        <div className="flex lg:col-span-2 h-14">
                                                            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                                                @
                                                            </div>
                                                            <input type="text" placeholder="Email" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <input type="text" placeholder="Line 1" className="form-input h-14 mb-4 w-full" />
                                                        <input type="text" placeholder="Line 2" className="form-input h-14 mb-4 w-full" />
                                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                                            <Select
                                                                options={namePrefix}
                                                                isSearchable={true}
                                                                placeholder="Country"
                                                                className="w-full h-14 mb-4 lg:col-span-2"
                                                                styles={{
                                                                    ...customStyles,
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                            <Select
                                                                options={namePrefix}
                                                                isSearchable={true}
                                                                placeholder="City"
                                                                className="w-full h-14 lg:col-span-2"
                                                                styles={{
                                                                    ...customStyles,
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                        </div>
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <div className="w-full">
                                                            <Select
                                                                options={alevelSubjectList}
                                                                isSearchable={true}
                                                                placeholder="Country Of CitizenShip"
                                                                className="w-full h-14 mb-4"
                                                                styles={{
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                        </div>
                                                        <input type="text" placeholder="PassPort Number" className="form-input h-14 mb-4 w-full" />
                                                        <Select
                                                            options={alevelSubjectList}
                                                            isSearchable={true}
                                                            placeholder="Birth Country"
                                                            className="w-full h-14 mb-4"
                                                            styles={{
                                                                control: (provided) => ({
                                                                    ...provided,
                                                                    height: '3.5rem',
                                                                    width: '100%', // Ensures the control is 100% wide
                                                                }),
                                                                valueContainer: (provided) => ({
                                                                    ...provided,
                                                                    height: '100%',
                                                                    width: '100%', // Ensures the value container fills the control
                                                                }),
                                                                input: (provided) => ({
                                                                    ...provided,
                                                                    height: '100%',
                                                                    width: '100%', // Ensures the input area takes full height and width
                                                                }),
                                                            }}
                                                        />
                                                        <Select
                                                            options={alevelSubjectList}
                                                            isSearchable={true}
                                                            placeholder="City Of Birth"
                                                            className="w-full h-14 mb-4"
                                                            styles={{
                                                                control: (provided) => ({
                                                                    ...provided,
                                                                    height: '3.5rem',
                                                                    width: '100%', // Ensures the control is 100% wide
                                                                }),
                                                                valueContainer: (provided) => ({
                                                                    ...provided,
                                                                    height: '100%',
                                                                    width: '100%', // Ensures the value container fills the control
                                                                }),
                                                                input: (provided) => ({
                                                                    ...provided,
                                                                    height: '100%',
                                                                    width: '100%', // Ensures the input area takes full height and width
                                                                }),
                                                            }}
                                                        />
                                                        <Select
                                                            options={alevelSubjectList}
                                                            isSearchable={true}
                                                            placeholder="Citizen Status"
                                                            className="w-full h-14 mb-4"
                                                            styles={{
                                                                control: (provided) => ({
                                                                    ...provided,
                                                                    height: '3.5rem',
                                                                    width: '100%', // Ensures the control is 100% wide
                                                                }),
                                                                valueContainer: (provided) => ({
                                                                    ...provided,
                                                                    height: '100%',
                                                                    width: '100%', // Ensures the value container fills the control
                                                                }),
                                                                input: (provided) => ({
                                                                    ...provided,
                                                                    height: '100%',
                                                                    width: '100%', // Ensures the input area takes full height and width
                                                                }),
                                                            }}
                                                        />
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <div className="w-full">
                                                            <Select
                                                                options={alevelSubjectList}
                                                                isSearchable={true}
                                                                placeholder="Visa Refusal"
                                                                className="w-full h-14 mb-4"
                                                                styles={{
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                        </div>
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>
                                </div>
                            </div>
                        }
                        {activeTab4 === 3 &&
                            <div className="mt-3" id="vertical_pills">
                                <div className="mb-5 flex flex-col sm:flex-row">
                                    <Tab.Group>
                                        <div className="mb-5 sm:mb-0 sm:flex-[0_0_20%]">
                                            <Tab.List className="space-y-2 ltr:pr-4 rtl:pl-4">
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            Post Graduate
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            Under Graduate
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            A Level
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            AS Level
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            O Level
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            HSSC
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            SSC
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            className={`${selected ? '!bg-primary text-white !outline-none' : ''}
                                                    duration-300' block font-semibold text-primary rounded-md p-3.5 py-1 transition-all hover:bg-primary hover:text-white`}
                                                            style={{ width: '100%', display: 'flex', textAlign: 'start' }}
                                                        >
                                                            Other Qualification
                                                        </button>
                                                    )}
                                                </Tab>
                                            </Tab.List>
                                        </div>
                                        <Tab.Panels className='w-full'>
                                            <Tab.Panel className='w-full'>
                                                <div className="active">
                                                    <form className='w-full'>
                                                        <input type="text" placeholder="Institute Name" className="form-input h-14 mb-4" />
                                                        <input type="text" placeholder="Degree Title" className="form-input h-14 mb-4" />
                                                        <input type="text" placeholder="Grades" className="form-input h-14 mb-4" />
                                                        <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-14" onChange={(date) => setDate1(date)} placeholder='Completion Year' />
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <input type="text" placeholder="Institute Name" className="form-input h-14 mb-4" />
                                                        <input type="text" placeholder="Degree Title" className="form-input h-14 mb-4" />
                                                        <input type="text" placeholder="Grades" className="form-input h-14 mb-4" />
                                                        <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-14" onChange={(date) => setDate1(date)} placeholder='Completion Year' />
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <input type="text" placeholder="Institute Name" className="form-input h-14 mb-4 w-full" />
                                                        <input type="text" placeholder="Degree Title" className="form-input h-14 mb-4 w-full" />
                                                        <div className="w-full">
                                                            <Select
                                                                options={alevelSubjectList}
                                                                isSearchable={true}
                                                                placeholder="Subject List"
                                                                className="w-full h-14 mb-4"
                                                                styles={{
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                        </div>
                                                        <input type="text" placeholder="Grades" className="form-input h-14 mb-4 w-full" />
                                                        <Flatpickr
                                                            value={date1}
                                                            options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }}
                                                            className="form-input h-14 w-full mb-4"
                                                            onChange={(date) => setDate1(date)}
                                                            placeholder='Completion Year'
                                                        />
                                                        <input type="text" placeholder="Awarding Body" className="form-input h-14 mb-4 w-full" />
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                                                        >
                                                            Add More
                                                        </button>
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <input type="text" placeholder="Institute Name" className="form-input h-14 mb-4 w-full" />
                                                        <input type="text" placeholder="Degree Title" className="form-input h-14 mb-4 w-full" />
                                                        <div className="w-full">
                                                            <Select
                                                                options={alevelSubjectList}
                                                                isSearchable={true}
                                                                placeholder="Subject List"
                                                                className="w-full h-14 mb-4"
                                                                styles={{
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                        </div>
                                                        <input type="text" placeholder="Grades" className="form-input h-14 mb-4 w-full" />
                                                        <Flatpickr
                                                            value={date1}
                                                            options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }}
                                                            className="form-input h-14 w-full mb-4"
                                                            onChange={(date) => setDate1(date)}
                                                            placeholder='Completion Year'
                                                        />
                                                        <input type="text" placeholder="Awarding Body" className="form-input h-14 mb-4 w-full" />
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                                                        >
                                                            Add More
                                                        </button>
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <input type="text" placeholder="Institute Name" className="form-input h-14 mb-4 w-full" />
                                                        <input type="text" placeholder="Degree Title" className="form-input h-14 mb-4 w-full" />
                                                        <div className="w-full">
                                                            <Select
                                                                options={alevelSubjectList}
                                                                isSearchable={true}
                                                                placeholder="Subject List"
                                                                className="w-full h-14 mb-4"
                                                                styles={{
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                        </div>
                                                        <input type="text" placeholder="Grades" className="form-input h-14 mb-4 w-full" />
                                                        <Flatpickr
                                                            value={date1}
                                                            options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }}
                                                            className="form-input h-14 w-full mb-4"
                                                            onChange={(date) => setDate1(date)}
                                                            placeholder='Completion Year'
                                                        />
                                                        <input type="text" placeholder="Awarding Body" className="form-input h-14 mb-4 w-full" />
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                                                        >
                                                            Add More
                                                        </button>
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <input type="text" placeholder="Institute Name" className="form-input h-14 mb-4 w-full" />
                                                        <input type="text" placeholder="Degree Title" className="form-input h-14 mb-4 w-full" />
                                                        <div className="w-full">
                                                            <Select
                                                                options={alevelSubjectList}
                                                                isSearchable={true}
                                                                placeholder="Subject List"
                                                                className="w-full h-14 mb-4"
                                                                styles={{
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                        </div>
                                                        <input type="text" placeholder="Grades" className="form-input h-14 mb-4 w-full" />
                                                        <Flatpickr
                                                            value={date1}
                                                            options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }}
                                                            className="form-input h-14 w-full mb-4"
                                                            onChange={(date) => setDate1(date)}
                                                            placeholder='Completion Year'
                                                        />
                                                        <input type="text" placeholder="Awarding Body" className="form-input h-14 mb-4 w-full" />
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                                                        >
                                                            Add More
                                                        </button>
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <input type="text" placeholder="Institute Name" className="form-input h-14 mb-4 w-full" />
                                                        <input type="text" placeholder="Degree Title" className="form-input h-14 mb-4 w-full" />
                                                        <div className="w-full">
                                                            <Select
                                                                options={alevelSubjectList}
                                                                isSearchable={true}
                                                                placeholder="Subject List"
                                                                className="w-full h-14 mb-4"
                                                                styles={{
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                        </div>
                                                        <input type="text" placeholder="Grades" className="form-input h-14 mb-4 w-full" />
                                                        <Flatpickr
                                                            value={date1}
                                                            options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }}
                                                            className="form-input h-14 w-full mb-4"
                                                            onChange={(date) => setDate1(date)}
                                                            placeholder='Completion Year'
                                                        />
                                                        <input type="text" placeholder="Awarding Body" className="form-input h-14 mb-4 w-full" />
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                                                        >
                                                            Add More
                                                        </button>
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel className='w-full'>
                                                <div className="">
                                                    <form className='w-full'>
                                                        <input type="text" placeholder="Institute Name" className="form-input h-14 mb-4 w-full" />
                                                        <input type="text" placeholder="Degree Title" className="form-input h-14 mb-4 w-full" />
                                                        <div className="w-full">
                                                            <Select
                                                                options={alevelSubjectList}
                                                                isSearchable={true}
                                                                placeholder="Subject List"
                                                                className="w-full h-14 mb-4"
                                                                styles={{
                                                                    control: (provided) => ({
                                                                        ...provided,
                                                                        height: '3.5rem',
                                                                        width: '100%', // Ensures the control is 100% wide
                                                                    }),
                                                                    valueContainer: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the value container fills the control
                                                                    }),
                                                                    input: (provided) => ({
                                                                        ...provided,
                                                                        height: '100%',
                                                                        width: '100%', // Ensures the input area takes full height and width
                                                                    }),
                                                                }}
                                                            />
                                                        </div>
                                                        <input type="text" placeholder="Grades" className="form-input h-14 mb-4 w-full" />
                                                        <Flatpickr
                                                            value={date1}
                                                            options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }}
                                                            className="form-input h-14 w-full mb-4"
                                                            onChange={(date) => setDate1(date)}
                                                            placeholder='Completion Year'
                                                        />
                                                        <input type="text" placeholder="Awarding Body" className="form-input h-14 mb-4 w-full" />
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                                                        >
                                                            Add More
                                                        </button>
                                                    </form>
                                                </div>
                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>
                                </div>
                            </div>
                        }
                        {activeTab4 === 4 &&
                            <div className="mt-3" id="vertical_pills">
                                <form className='w-full'>
                                    <div className="w-full">
                                        <Select
                                            options={alevelSubjectList}
                                            isSearchable={true}
                                            placeholder="English Proficiency"
                                            className="w-full h-14 mb-4"
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    height: '3.5rem',
                                                    width: '100%', // Ensures the control is 100% wide
                                                }),
                                                valueContainer: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the value container fills the control
                                                }),
                                                input: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the input area takes full height and width
                                                }),
                                            }}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                        <input type="text" placeholder="Speaking" className="form-input h-14 mb-4 lg:col-span-1" />
                                        <input type="text" placeholder="Listening" className="form-input h-14 mb-4 lg:col-span-1" />
                                        <input type="text" placeholder="Writing" className="form-input h-14 mb-4 lg:col-span-1" />
                                        <input type="text" placeholder="Reading" className="form-input h-14 mb-4 lg:col-span-1" />
                                    </div>
                                    <input type="text" placeholder="Score" className="form-input h-14 mb-4" />
                                    <input type="file" placeholder="Score" className="form-input h-14 mb-4 pt-4" />
                                    <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-14 mb-4" onChange={(date) => setDate1(date)} placeholder='Date Of Test' />
                                    <button
                                        type="button"
                                        className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                                    >
                                        Add More
                                    </button>
                                </form>
                            </div>
                        }
                        {activeTab4 === 5 &&
                            <div className="mt-3" id="vertical_pills">
                                <form className='w-full'>
                                    <div className="w-full">
                                        <Select
                                            options={alevelSubjectList}
                                            isSearchable={true}
                                            placeholder="Entrance Test"
                                            className="w-full h-14 mb-4"
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    height: '3.5rem',
                                                    width: '100%', // Ensures the control is 100% wide
                                                }),
                                                valueContainer: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the value container fills the control
                                                }),
                                                input: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the input area takes full height and width
                                                }),
                                            }}
                                        />
                                    </div>
                                    <input type="text" placeholder="Score" className="form-input h-14 mb-4" />
                                    <input type="file" placeholder="Score" className="form-input h-14 mb-4 pt-4" />
                                    <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-14 mb-4" onChange={(date) => setDate1(date)} placeholder='Date Of Test' />
                                    <button
                                        type="button"
                                        className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                                    >
                                        Add More
                                    </button>
                                </form>
                            </div>
                        }
                        {activeTab4 === 6 &&
                            <div className="mt-3" id="vertical_pills">
                                <form className='w-full'>
                                    <div className="w-full">
                                        <Select
                                            options={alevelSubjectList}
                                            isSearchable={true}
                                            placeholder="First Country"
                                            className="w-full h-14 mb-4"
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    height: '3.5rem',
                                                    width: '100%', // Ensures the control is 100% wide
                                                }),
                                                valueContainer: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the value container fills the control
                                                }),
                                                input: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the input area takes full height and width
                                                }),
                                            }}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Select
                                            options={alevelSubjectList}
                                            isSearchable={true}
                                            placeholder="Second Country"
                                            className="w-full h-14 mb-4"
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    height: '3.5rem',
                                                    width: '100%', // Ensures the control is 100% wide
                                                }),
                                                valueContainer: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the value container fills the control
                                                }),
                                                input: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the input area takes full height and width
                                                }),
                                            }}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Select
                                            options={alevelSubjectList}
                                            isSearchable={true}
                                            placeholder="Third Country"
                                            className="w-full h-14 mb-4"
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    height: '3.5rem',
                                                    width: '100%', // Ensures the control is 100% wide
                                                }),
                                                valueContainer: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the value container fills the control
                                                }),
                                                input: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the input area takes full height and width
                                                }),
                                            }}
                                        />
                                    </div>
                                </form>
                            </div>
                        }
                        {activeTab4 === 7 &&
                            <div className="mt-3" id="vertical_pills">
                                <form className='w-full'>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                        <input type="text" placeholder="Reference Name" className="form-input h-14 mb-4 lg:col-span-2" />
                                        <Select
                                            options={namePrefix}
                                            isSearchable={true}
                                            placeholder="Reference Type"
                                            className="w-full h-14 mb-4 lg:col-span-2"
                                            styles={{
                                                ...customStyles,
                                                control: (provided) => ({
                                                    ...provided,
                                                    height: '3.5rem',
                                                    width: '100%', // Ensures the control is 100% wide
                                                }),
                                                valueContainer: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the value container fills the control
                                                }),
                                                input: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the input area takes full height and width
                                                }),
                                            }}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                        <input type="text" placeholder="Contact No" className="form-input h-14 mb-4 lg:col-span-2" />
                                        <input type="text" placeholder="Email Address" className="form-input h-14 mb-4 lg:col-span-2" />
                                    </div>
                                    <input type="text" placeholder="Institution Name" className="form-input h-14 mb-4" />
                                    <input type="text" placeholder="Institution Address" className="form-input h-14 mb-4" />
                                    <input type="text" placeholder="Designation" className="form-input h-14 mb-4" />
                                    <button
                                        type="button"
                                        className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                                    >
                                        Add More
                                    </button>
                                </form>
                            </div>
                        }
                        {activeTab4 === 8 &&
                            <div className="mt-3" id="vertical_pills">
                                <form className='w-full'>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                        <input type="text" placeholder="Company Name" className="form-input h-14 mb-4 lg:col-span-2" />
                                        <input type="text" placeholder="Designation" className="form-input h-14 mb-4 lg:col-span-2" />
                                    </div>
                                    <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-14 mb-4" onChange={(date) => setDate1(date)} placeholder='From' />
                                    <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-14 mb-4" onChange={(date) => setDate1(date)} placeholder='To' />
                                    <input type="text" placeholder="Responsibilities" className="form-input h-14 mb-4" />
                                    <button
                                        type="button"
                                        className="btn btn-primary ltr:ml-auto rtl:mr-auto"
                                    >
                                        Add More
                                    </button>
                                </form>
                            </div>
                        }
                        {activeTab4 === 9 &&
                            <div className="mt-3" id="vertical_pills">
                                <form className='w-full'>
                                    <div className="w-full">
                                        <Select
                                            options={alevelSubjectList}
                                            isSearchable={true}
                                            placeholder="Year"
                                            className="w-full h-14 mb-4"
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    height: '3.5rem',
                                                    width: '100%', // Ensures the control is 100% wide
                                                }),
                                                valueContainer: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the value container fills the control
                                                }),
                                                input: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the input area takes full height and width
                                                }),
                                            }}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Select
                                            options={alevelSubjectList}
                                            isSearchable={true}
                                            placeholder="InTake"
                                            className="w-full h-14 mb-4"
                                            styles={{
                                                control: (provided) => ({
                                                    ...provided,
                                                    height: '3.5rem',
                                                    width: '100%', // Ensures the control is 100% wide
                                                }),
                                                valueContainer: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the value container fills the control
                                                }),
                                                input: (provided) => ({
                                                    ...provided,
                                                    height: '100%',
                                                    width: '100%', // Ensures the input area takes full height and width
                                                }),
                                            }}
                                        />
                                    </div>
                                </form>
                            </div>
                        }
                        {activeTab4 === 10 &&
                            <div className="mt-3" id="vertical_pills">
                                <form className='w-full'>
                                    <input type="text" placeholder="Comments" className="form-input h-14 mb-4" />
                                </form>
                            </div>
                        }
                        {activeTab4 === 11 &&
                            <div className="mt-3" id="vertical_pills">
                                <form className='w-full'>
                                    <Flatpickr
                                        data-enable-time
                                        options={{
                                            enableTime: true,
                                            dateFormat: 'Y-m-d H:i',
                                            position: isRtl ? 'auto right' : 'auto left',
                                        }}
                                        className="form-input h-14"
                                        placeholder='Date & Time'
                                    />
                                </form>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegistrationForm;
