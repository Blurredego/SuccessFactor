import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Swal from 'sweetalert2';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconUserPlus from '../../components/Icon/IconUserPlus';
import IconListCheck from '../../components/Icon/IconListCheck';
import IconLayoutGrid from '../../components/Icon/IconLayoutGrid';
import IconSearch from '../../components/Icon/IconSearch';
import IconUser from '../../components/Icon/IconUser';

const Contacts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Registered Users'));
    });
    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const [addContactModal, setAddContactModal] = useState(false);

    const [value, setValue] = useState('list');
    const [defaultParams] = useState({
        id: null,
        name: '',
        email: '',
        phone: '',
        role: '',
        location: '',
    });

    const branchesOptions = [
        { label: "SFK", value: "SFK", level: 1 },
        { label: "SFL", value: "SFL", level: 2 },
        { label: "SFI", value: "SFI", level: 3 },
        { label: "SFS", value: "SFS", level: 4 },
        { label: "SFH", value: "SFH", level: 5 },
        { label: "SFIR", value: "SFIR", level: 6 },
        { label: "SFC", value: "SFC", level: 7 },
    ];

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

    const userRoles = [
        { role: "Administrator", level: 1 },
        { role: "Management", level: 2 },
        { role: "Mentor", level: 3 },
        { role: "Counselor", level: 3 },
        { role: "Application Officer", level: 4 },
        { role: "Visa Officer", level: 5 },
        { role: "Student", level: 7 },
        { role: "Marketing", level: 8 },
    ];

    const [params, setParams] = useState(JSON.parse(JSON.stringify(defaultParams)));

    const changeValue = (e) => {
        const { value, id } = e.target;
        setParams({ ...params, [id]: value });
    };

    const [search, setSearch] = useState('');
    const [contactList] = useState([
        {
            id: 1,
            path: 'profile-35.png',
            name: 'Alan Green',
            role: 'Web Developer',
            email: 'alan@mail.com',
            location: 'Boston, USA',
            phone: '+1 202 555 0197',
            posts: 25,
            followers: '5K',
            following: 500,
        },
        {
            id: 2,
            path: 'profile-35.png',
            name: 'Linda Nelson',
            role: 'Web Designer',
            email: 'linda@mail.com',
            location: 'Sydney, Australia',
            phone: '+1 202 555 0170',
            posts: 25,
            followers: '21.5K',
            following: 350,
        },
        {
            id: 3,
            path: 'profile-35.png',
            name: 'Lila Perry',
            role: 'UX/UI Designer',
            email: 'lila@mail.com',
            location: 'Miami, USA',
            phone: '+1 202 555 0105',
            posts: 20,
            followers: '21.5K',
            following: 350,
        },
        {
            id: 4,
            path: 'profile-35.png',
            name: 'Andy King',
            role: 'Project Lead',
            email: 'andy@mail.com',
            location: 'Tokyo, Japan',
            phone: '+1 202 555 0194',
            posts: 25,
            followers: '21.5K',
            following: 300,
        },
        {
            id: 5,
            path: 'profile-35.png',
            name: 'Jesse Cory',
            role: 'Web Developer',
            email: 'jesse@mail.com',
            location: 'Edinburgh, UK',
            phone: '+1 202 555 0161',
            posts: 30,
            followers: '20K',
            following: 350,
        },
        {
            id: 6,
            path: 'profile-35.png',
            name: 'Xavier',
            role: 'UX/UI Designer',
            email: 'xavier@mail.com',
            location: 'New York, USA',
            phone: '+1 202 555 0155',
            posts: 25,
            followers: '21.5K',
            following: 350,
        },
        {
            id: 7,
            path: 'profile-35.png',
            name: 'Susan',
            role: 'Project Manager',
            email: 'susan@mail.com',
            location: 'Miami, USA',
            phone: '+1 202 555 0118',
            posts: 40,
            followers: '21.5K',
            following: 350,
        },
        {
            id: 8,
            path: 'profile-35.png',
            name: 'Raci Lopez',
            role: 'Web Developer',
            email: 'traci@mail.com',
            location: 'Edinburgh, UK',
            phone: '+1 202 555 0135',
            posts: 25,
            followers: '21.5K',
            following: 350,
        },
        {
            id: 9,
            path: 'profile-35.png',
            name: 'Steven Mendoza',
            role: 'HR',
            email: 'sokol@verizon.net',
            location: 'Monrovia, US',
            phone: '+1 202 555 0100',
            posts: 40,
            followers: '21.8K',
            following: 300,
        },
        {
            id: 10,
            path: 'profile-35.png',
            name: 'James Cantrell',
            role: 'Web Developer',
            email: 'sravani@comcast.net',
            location: 'Michigan, US',
            phone: '+1 202 555 0134',
            posts: 100,
            followers: '28K',
            following: 520,
        },
        {
            id: 11,
            path: 'profile-35.png',
            name: 'Reginald Brown',
            role: 'Web Designer',
            email: 'drhyde@gmail.com',
            location: 'Entrimo, Spain',
            phone: '+1 202 555 0153',
            posts: 35,
            followers: '25K',
            following: 500,
        },
        {
            id: 12,
            path: 'profile-35.png',
            name: 'Stacey Smith',
            role: 'Chief technology officer',
            email: 'maikelnai@optonline.net',
            location: 'Lublin, Poland',
            phone: '+1 202 555 0115',
            posts: 21,
            followers: '5K',
            following: 200,
        },
    ]);

    const [filteredItems, setFilteredItems] = useState(contactList);

    useEffect(() => {
        setFilteredItems(() => {
            return contactList.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase());
            });
        });
    }, [search, contactList]);

    const saveUser = () => {
        if (!params.name) {
            showMessage('Name is required.', 'error');
            return true;
        }
        if (!params.email) {
            showMessage('Email is required.', 'error');
            return true;
        }
        if (!params.phone) {
            showMessage('Phone is required.', 'error');
            return true;
        }
        if (!params.role) {
            showMessage('Occupation is required.', 'error');
            return true;
        }

        if (params.id) {
            //update user
            let user = filteredItems.find((d) => d.id === params.id);
            user.name = params.name;
            user.email = params.email;
            user.phone = params.phone;
            user.role = params.role;
            user.location = params.location;
        } else {
            //add user
            let maxUserId = filteredItems.length ? filteredItems.reduce((max, character) => (character.id > max ? character.id : max), filteredItems[0].id) : 0;

            let user = {
                id: maxUserId + 1,
                path: 'profile-35.png',
                name: params.name,
                email: params.email,
                phone: params.phone,
                role: params.role,
                location: params.location,
                posts: 20,
                followers: '5K',
                following: 500,
            };
            filteredItems.splice(0, 0, user);
            //   searchContacts();
        }

        showMessage('User has been saved successfully.');
        setAddContactModal(false);
    };

    const editUser = (user = null) => {
        const json = JSON.parse(JSON.stringify(defaultParams));
        setParams(json);
        if (user) {
            let json1 = JSON.parse(JSON.stringify(user));
            setParams(json1);
        }
        setAddContactModal(true);
    };

    const deleteUser = (user = null) => {
        setFilteredItems(filteredItems.filter((d) => d.id !== user.id));
        showMessage('User has been deleted successfully.');
    };

    const showMessage = (msg = '', type = 'success') => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            customClass: { container: 'toast' },
        });
        toast.fire({
            icon: type,
            title: msg,
            padding: '10px 20px',
        });
    };

    return (
        <div>
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-xl">Users</h2>
                <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto">
                    <div className="flex gap-3">
                        <div>
                            <button type="button" className="btn btn-primary" onClick={() => editUser()}>
                                <IconUserPlus className="ltr:mr-2 rtl:ml-2" />
                                Add New User
                            </button>
                        </div>
                        <div>
                            <button type="button" className={`btn btn-outline-primary p-2 ${value === 'list' && 'bg-primary text-white'}`} onClick={() => setValue('list')}>
                                <IconListCheck />
                            </button>
                        </div>
                        <div>
                            <button type="button" className={`btn btn-outline-primary p-2 ${value === 'grid' && 'bg-primary text-white'}`} onClick={() => setValue('grid')}>
                                <IconLayoutGrid />
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <input type="text" placeholder="Search Users" className="form-input py-2 ltr:pr-11 rtl:pl-11 peer" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button type="button" className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                            <IconSearch className="mx-auto" />
                        </button>
                    </div>
                </div>
            </div>
            {value === 'list' && (
                <div className="mt-5 panel p-0 border-0 overflow-hidden">
                    <div className="table-responsive">
                        <table className="table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Branch</th>
                                    <th>Role</th>
                                    <th className="!text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.map((contact) => {
                                    return (
                                        <tr key={contact.id}>
                                            <td>
                                                <div className="flex items-center w-max">
                                                    {contact.path && (
                                                        <div className="w-max">
                                                            <img src={`/assets/images/${contact.path}`} className="h-8 w-8 rounded-full object-cover ltr:mr-2 rtl:ml-2" alt="avatar" />
                                                        </div>
                                                    )}
                                                    {!contact.path && contact.name && (
                                                        <div className="grid place-content-center h-8 w-8 ltr:mr-2 rtl:ml-2 rounded-full bg-primary text-white text-sm font-semibold"></div>
                                                    )}
                                                    {!contact.path && !contact.name && (
                                                        <div className="border border-gray-300 dark:border-gray-800 rounded-full p-2 ltr:mr-2 rtl:ml-2">
                                                            <IconUser className="w-4.5 h-4.5" />
                                                        </div>
                                                    )}
                                                    <div>{contact.name}</div>
                                                </div>
                                            </td>
                                            <td>{contact.email}</td>
                                            <td className="whitespace-nowrap">{contact.location}</td>
                                            <td className="whitespace-nowrap">{contact.role}</td>
                                            <td>
                                                <div className="flex gap-4 items-center justify-center">
                                                    <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => editUser(contact)}>
                                                        Edit
                                                    </button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => deleteUser(contact)}>
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {value === 'grid' && (
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-5 w-full">
                    {filteredItems.map((contact) => {
                        return (
                            <div className="bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative" key={contact.id}>
                                <div className="bg-white dark:bg-[#1c232f] rounded-md overflow-hidden text-center shadow relative">
                                    <div
                                        className="bg-white/40 rounded-t-md bg-center bg-cover p-6 pb-0 bg-"
                                        style={{
                                            backgroundImage: `url('/assets/images/notification-bg.png')`,
                                            backgroundRepeat: 'no-repeat',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    >
                                        <img className="object-contain w-4/5 max-h-40 mx-auto" src={`/assets/images/${contact.path}`} alt="contact_image" />
                                    </div>
                                    <div className="px-6 pb-24 -mt-10 relative">
                                        <div className="shadow-md bg-white dark:bg-gray-900 rounded-md px-2 py-4">
                                            <div className="text-xl">{contact.name}</div>
                                            <div className="text-white-dark">{contact.role}</div>
                                        </div>
                                        <div className="mt-6 grid grid-cols-1 gap-4 ltr:text-left rtl:text-right">
                                            <div className="flex items-center">
                                                <div className="flex-none ltr:mr-2 rtl:ml-2">Branch :</div>
                                                <div className="text-white-dark">{contact.location}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex-none ltr:mr-2 rtl:ml-2">Email :</div>
                                                <div className="truncate text-white-dark">{contact.email}</div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex-none ltr:mr-2 rtl:ml-2">Phone :</div>
                                                <div className="text-white-dark">{contact.phone}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex gap-4 absolute bottom-0 w-full ltr:left-0 rtl:right-0 p-6">
                                        <button type="button" className="btn btn-outline-primary w-1/2" onClick={() => editUser(contact)}>
                                            Edit
                                        </button>
                                        <button type="button" className="btn btn-outline-danger w-1/2" onClick={() => deleteUser(contact)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* User Create Modal */}
            <Transition appear show={addContactModal} as={Fragment}>
                <Dialog as="div" open={addContactModal} onClose={() => setAddContactModal(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="fadein_up_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                        <div className="flex min-h-screen items-center justify-center px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel as="div" className={`panel my-8 w-full max-w-5xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark px-6 animate__animated ${isRtl ? 'animate__fadeInRight' : 'animate__fadeInLeft'}`}>
                                    <div className="flex items-center justify-between bg-[#fbfbfb] px-5 pt-8 dark:bg-[#121c2c]">
                                        <h5 className="text-xl font-bold">Create User Form</h5>
                                    </div>
                                    <div className="px-5 pt-4 pb-5">
                                        <div className="mb-2">
                                            <form>
                                                <input type="text" placeholder="Name" className="form-input h-14 mb-4" />
                                                <div className="flex w-full h-14 mb-4">
                                                    <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                                        @
                                                    </div>
                                                    <input type="text" placeholder="Email" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                                                </div>
                                                <input type="text" placeholder="Password" className="form-input h-14 mb-4" />
                                                <div className="w-full">
                                                    <Select
                                                        options={userRoles}
                                                        isSearchable={true}
                                                        placeholder="Role"
                                                        className="w-full h-14 mb-4"
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
                                                <div className="mt-4 flex items-center justify-end">
                                                    <button onClick={() => setAddContactModal(false)} type="button" className="btn btn-outline-danger">
                                                        Discard
                                                    </button>
                                                    <button onClick={() => setAddContactModal(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                        Save
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Contacts;
