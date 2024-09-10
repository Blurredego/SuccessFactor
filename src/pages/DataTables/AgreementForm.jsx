import React from 'react';
import MaskedInput from 'react-text-mask';
import Flatpickr from 'react-flatpickr';
import IconHome from '../../components/Icon/IconHome';
import IconUser from '../../components/Icon/IconUser';
import IconThumbUp from '../../components/Icon/IconThumbUp';

const AgreementForm = ({ date1, setDate1, isRtl, activeTab4, setActiveTab4 }) => {
    return (
        <>
            <div className="flex items-center justify-between bg-[#fbfbfb]  pt-4 dark:bg-[#121c2c]">
                <h5 className="text-xl font-bold">New Agreement Form</h5>
            </div>
            <div className="mb-5 mt-4">
                <div className="mb-5">
                    <div className="inline-block w-full">
                        <div className="relative z-[1]">
                            <div
                                className={`${activeTab4 === 1 ? 'w-[15%]' : activeTab4 === 2 ? 'w-[48%]' : activeTab4 === 3 ? 'w-[81%]' : ''}
                                        bg-primary w-[15%] h-1 absolute ltr:left-0 rtl:right-0 top-[30px] m-auto -z-[1] transition-[width]`}
                            ></div>
                            <ul className="mb-5 grid grid-cols-3">
                                <li className="mx-auto">
                                    <button
                                        type="button"
                                        className={`${activeTab4 === 1 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                        onClick={() => setActiveTab4(1)}
                                    >
                                        <IconHome />
                                    </button>
                                    <span className={`${activeTab4 === 1 ? 'text-primary ' : ''}text-center block mt-2`}>Basic Info</span>
                                </li>
                                <li className="mx-auto">
                                    <button
                                        type="button"
                                        className={`${activeTab4 === 2 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                        onClick={() => setActiveTab4(2)}
                                    >
                                        <IconUser className="w-5 h-5" />
                                    </button>
                                    <span className={`${activeTab4 === 2 ? 'text-primary ' : ''}text-center block mt-2`}>Portal Details</span>
                                </li>
                                <li className="mx-auto">
                                    <button
                                        type="button"
                                        className={`${activeTab4 === 3 ? '!border-primary !bg-primary text-white' : ''}
                                                border-[3px] border-[#f3f2ee] bg-white dark:bg-[#253b5c] dark:border-[#1b2e4b] flex justify-center items-center w-16 h-16 rounded-full`}
                                        onClick={() => setActiveTab4(3)}
                                    >
                                        <IconThumbUp className="w-5 h-5" />
                                    </button>
                                    <span className={`${activeTab4 === 3 ? 'text-primary ' : ''}text-center block mt-2`}>Point of Contact</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="mb-5">
                                {activeTab4 === 1 &&
                                    <form className='w-full'>
                                        <input type="text" placeholder="University Name" className="form-input h-14 mb-4" />
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                            <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-14 mb-4  lg:col-span-2" onChange={(date) => setDate1(date)} placeholder='Commencement Date' />
                                           
                                            <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-14 mb-4  lg:col-span-2" onChange={(date) => setDate1(date)} placeholder='Expiration Date' />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                            <input type="text" placeholder="Gross/Net Tuition Fee" className="form-input h-14 mb-4 lg:col-span-2" />
                                            <input type="text" placeholder="Rate Applied" className="form-input h-14 mb-4 lg:col-span-2" />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                                            <input type="text" placeholder="Tier Base System For Rates" className="form-input h-14 mb-4 lg:col-span-2" />
                                            <input type="text" placeholder="Bonus Incentive For a Particular Session" className="form-input h-14 mb-4 lg:col-span-2" />
                                        </div>
                                        <input type="text" placeholder="Invoice Deadline for a Session" className="form-input h-14 mb-4" />
                                    </form>
                                }
                            </div>
                            <div className="mb-5">
                                {activeTab4 === 2 &&
                                    <form className='w-full'>
                                        <input type="text" placeholder="Portal Url" className="form-input h-14 mb-4" />
                                        <input type="text" placeholder="Portal Email" className="form-input h-14 mb-4" />
                                        <input type="text" placeholder="Portal Password" className="form-input h-14 mb-4" />
                                    </form>
                                }
                            </div>
                            <div className="mb-5">
                                {activeTab4 === 3 &&
                                    <form className='w-full'>
                                        <input type="text" placeholder="Name" className="form-input h-14 mb-4" />
                                        <div className="flex lg:col-span-2 h-14 mb-4">
                                            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                                @
                                            </div>
                                            <input type="text" placeholder="Email" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                                        </div>
                                        <fieldset className='lg:col-span-2'>
                                            <MaskedInput
                                                id="phoneMask"
                                                type="text"
                                                placeholder="Mobile Number"
                                                className="form-input h-14"
                                                mask={['(', /[0-9]/, /[0-9]/, /[0-9]/, ')', ' ', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/]}
                                            />
                                        </fieldset>
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AgreementForm;
