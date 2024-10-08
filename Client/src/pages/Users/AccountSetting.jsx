import { useEffect, useState } from 'react';
import { setPageTitle } from '../../store/themeConfigSlice';
import { useDispatch } from 'react-redux';
import IconHome from '../../components/Icon/IconHome';
import IconPhone from '../../components/Icon/IconPhone';

const AccountSetting = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Account Setting'));
    });
    const [tabs, setTabs] = useState('home');
    const toggleTabs = (name) => {
        setTabs(name);
    };

    return (
        <>
            <div>
                <ul className="sm:flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('home')}
                            className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'home' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconHome />
                            Home
                        </button>
                    </li>
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('danger-zone')}
                            className={`flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary ${tabs === 'danger-zone' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconPhone />
                            Danger Zone
                        </button>
                    </li>
                </ul>
            </div>
            {tabs === 'home' ? (
                <div>
                    <form className="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-black">
                        <h6 className="text-lg font-bold mb-5">General Information</h6>
                        <div className="flex flex-col sm:flex-row">
                            <div className="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                                <img src="/assets//images/profile-34.jpeg" alt="img" className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
                            </div>
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="name">Full Name</label>
                                    <input id="name" type="text" placeholder="Mehdi Hassan" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="profession">Role</label>
                                    <input id="profession" type="text" placeholder="Counsellor" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input id="phone" type="text" placeholder="+1 (530) 555-12121" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" placeholder="Hassan@gmail.com" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="country">Branch</label>
                                    <select defaultValue="United States" id="country" className="form-select text-white-dark">
                                        <option value="All Countries">All Countries</option>
                                        <option value="United States">SFL</option>
                                        <option value="India">India</option>
                                        <option value="Japan">Japan</option>
                                        <option value="China">China</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                                <div className="sm:col-span-2 mt-3">
                                    <button type="button" className="btn btn-primary">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                ''
            )}
            {tabs === 'danger-zone' ? (
                <div className="switch">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="panel space-y-5">
                            <h5 className="font-semibold text-lg mb-4">Deactivate Account</h5>
                            <p>You will not be able to receive messages, notifications for up to 24 hours.</p>
                            <label className="w-12 h-6 relative">
                                <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" id="custom_switch_checkbox7" />
                                <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                            </label>
                        </div>
                        <div className="panel space-y-5">
                            <h5 className="font-semibold text-lg mb-4">Delete Account</h5>
                            <p>Once you delete the account, there is no going back. Please be certain.</p>
                            <button className="btn btn-danger btn-delete-account">Delete my account</button>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    );
};

export default AccountSetting;
