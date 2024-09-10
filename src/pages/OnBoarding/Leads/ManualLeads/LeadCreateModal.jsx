import React, { useState } from 'react';
import Select from 'react-select';
import MaskedInput from 'react-text-mask';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { BranchOptions } from '../../../../Data Resources/BranchOptions';
import { NamePrefix } from '../../../../Data Resources/NamePrefixes';
import { DialingCodes } from '../../../../Data Resources/DialingCodes';

const LeadCreateModal = ({ setleadCreateModal, isRtl }) => {

    const [date, setDate] = useState('Date of Birth');

    const customStyles = {
        menu: (provided) => ({
            ...provided,
            maxHeight: '200px', // Set your desired height here
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: '200px', // Set your desired height here
            overflowY: 'auto', // Enable scrolling if options exceed the height
        }),
    };

    return (
        <>
            <div className="flex items-center justify-between bg-[#fbfbfb] px-5 pt-8 dark:bg-[#121c2c]">
                <h5 className="text-xl font-bold">New Lead Form</h5>
            </div>
            <div className="px-5 pt-4 pb-5">
                <div className="lg:col-span-2">
                    <div className="mb-5">
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-5">
                                <Select options={BranchOptions} isSearchable={true} placeholder="Branch" className='lg:col-span-2' styles={customStyles} />
                                <Select options={NamePrefix} isSearchable={true} placeholder="Name Prefix" className='lg:col-span-2' />
                            </div>
                            <div className="grid grid-cols-1 xl:grid-cols-1 mb-5" id="multiple">
                                <div className="flex">
                                    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                        Full Name
                                    </div>
                                    <input type="text" placeholder="First Name" className="form-input ltr:border-r-0 rtl:border-l-0 focus:!border-r rounded-none flex-1" />
                                    <input type="text" placeholder="Middle Name" className="form-input ltr:border-r-0 rtl:border-l-0 focus:!border-r rounded-none flex-1" />
                                    <input type="text" placeholder="Last Name" className="form-input ltr:rounded-l-none rtl:rounded-r-none flex-1" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-5">
                                <div className="flex lg:col-span-2">
                                    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                        @
                                    </div>
                                    <input type="text" placeholder="Email" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                                </div>
                                <Select
                                    options={DialingCodes}
                                    isSearchable={true}
                                    placeholder="Dialing Code"
                                    className='lg:col-span-2'
                                    styles={customStyles}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-5">
                                <div className="flex lg:col-span-2">
                                    <Flatpickr value={date} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input" onChange={(date) => setDate(date)} placeholder='Date of Birth' />
                                </div>
                                <fieldset className='lg:col-span-2'>
                                    <MaskedInput
                                        id="phoneMask"
                                        type="text"
                                        placeholder="Mobile No"
                                        className="form-input "
                                        mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                    />
                                </fieldset>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-5">
                                <fieldset className='lg:col-span-2'>
                                    <MaskedInput
                                        id="phoneMask"
                                        type="text"
                                        placeholder="Home No"
                                        className="form-input "
                                        mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                    />
                                </fieldset>
                                <input type="text" placeholder="Qualification" className="form-input lg:col-span-2" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-5">
                                <input type="text" placeholder="Institute Name" className="form-input lg:col-span-2" />
                            </div>
                            <div className="mt-4 flex items-center justify-end">
                                <button onClick={() => setleadCreateModal(false)} type="button" className="btn btn-outline-danger">
                                    Discard
                                </button>
                                <button onClick={() => setleadCreateModal(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeadCreateModal;
