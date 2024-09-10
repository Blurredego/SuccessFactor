import { DataTable } from 'mantine-datatable';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import { ReactSortable } from 'react-sortablejs';
import { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';
import IconStar from '../../components/Icon/IconStar';
import { Dialog, Tab, Transition } from '@headlessui/react';
import IconPhone from '../../components/Icon/IconPhone';
import IconUser from '../../components/Icon/IconUser';
import IconHome from '../../components/Icon/IconHome';
import EnquiryForm from '../Apps/EnquiryForm';
import RegistrationForm from '../Apps/RegistrationForm';

const items1 = [
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

const Basic = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Query'));
    });

    const [activeTab4, setActiveTab4] = useState(1);

    const PAGE_SIZES = [10, 20, 30, 50, 100];

    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const rowData = [
        {
            id: 1,
            firstName: 'Caroline',
            lastName: 'Jensen',
            email: 'carolinejensen@zidant.com',
            dob: '2004-05-28',
            address: {
                street: '529 Scholes Street',
                city: 'Temperanceville',
                zipcode: 5235,
                geo: {
                    lat: 23.806115,
                    lng: 164.677197,
                },
            },
            phone: '+1 (821) 447-3782',
            isActive: true,
            age: 39,
            company: 'POLARAX',
            actions: <div className="dropdown flex justify-center">
                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                    <ul>
                        <li>
                            <button type="button" onClick={() => setModal4(true)}>View Query</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => setModal5(true)}>Edit Query</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => setModal2(true)}>Query Status</button>
                        </li>
                        <li>
                            <button type="button">Query Score</button>
                        </li>
                        <li>
                            <button type="button">Delete Query</button>
                        </li>
                        <li>
                            <button type="button">Query Campaign</button>
                        </li>
                        <li>
                            <button type="button">Add Collaborator</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => setModal6(true)}>Proceed to Registration</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>
        },
        {
            id: 2,
            firstName: 'Celeste',
            lastName: 'Grant',
            email: 'celestegrant@polarax.com',
            dob: '1989-11-19',
            address: {
                street: '639 Kimball Street',
                city: 'Bascom',
                zipcode: 8907,
                geo: {
                    lat: 65.954483,
                    lng: 98.906478,
                },
            },
            phone: '+1 (838) 515-3408',
            isActive: false,
            age: 32,
            company: 'MANGLO',
            actions: <div className="dropdown flex justify-center">
                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                    <ul>
                        <li>
                            <button type="button">View Lead</button>
                        </li>
                        <li>
                            <button type="button">Edit Lead</button>
                        </li>
                        <li>
                            <button type="button">Delete Lead</button>
                        </li>
                        <li>
                            <button type="button">Add Collaborator</button>
                        </li>
                        <li>
                            <button type="button">Proceed to Query</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>
        },
        {
            id: 3,
            firstName: 'Tillman',
            lastName: 'Forbes',
            email: 'tillmanforbes@manglo.com',
            dob: '2016-09-05',
            address: {
                street: '240 Vandalia Avenue',
                city: 'Thynedale',
                zipcode: 8994,
                geo: {
                    lat: -34.949388,
                    lng: -82.958111,
                },
            },
            phone: '+1 (969) 496-2892',
            isActive: false,
            age: 26,
            company: 'APPLIDECK',
            actions: <div className="dropdown flex justify-center">
                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                    <ul>
                        <li>
                            <button type="button">View Lead</button>
                        </li>
                        <li>
                            <button type="button">Edit Lead</button>
                        </li>
                        <li>
                            <button type="button">Delete Lead</button>
                        </li>
                        <li>
                            <button type="button">Add Collaborator</button>
                        </li>
                        <li>
                            <button type="button">Proceed to Query</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>
        },
        {
            id: 4,
            firstName: 'Daisy',
            lastName: 'Whitley',
            email: 'daisywhitley@applideck.com',
            dob: '1987-03-23',
            address: {
                street: '350 Pleasant Place',
                city: 'Idledale',
                zipcode: 9369,
                geo: {
                    lat: -54.458809,
                    lng: -127.476556,
                },
            },
            phone: '+1 (861) 564-2877',
            isActive: true,
            age: 21,
            company: 'VOLAX',
            actions: <div className="dropdown flex justify-center">
                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                    <ul>
                        <li>
                            <button type="button">View Lead</button>
                        </li>
                        <li>
                            <button type="button">Edit Lead</button>
                        </li>
                        <li>
                            <button type="button">Delete Lead</button>
                        </li>
                        <li>
                            <button type="button">Add Collaborator</button>
                        </li>
                        <li>
                            <button type="button">Proceed to Query</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>
        },
        {
            id: 5,
            firstName: 'Weber',
            lastName: 'Bowman',
            email: 'weberbowman@volax.com',
            dob: '1983-02-24',
            address: {
                street: '154 Conway Street',
                city: 'Broadlands',
                zipcode: 8131,
                geo: {
                    lat: 54.501351,
                    lng: -167.47138,
                },
            },
            phone: '+1 (962) 466-3483',
            isActive: false,
            age: 26,
            company: 'ORBAXTER',
            actions: <div className="dropdown flex justify-center">
                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                    <ul>
                        <li>
                            <button type="button">View Lead</button>
                        </li>
                        <li>
                            <button type="button">Edit Lead</button>
                        </li>
                        <li>
                            <button type="button">Delete Lead</button>
                        </li>
                        <li>
                            <button type="button">Add Collaborator</button>
                        </li>
                        <li>
                            <button type="button">Proceed to Query</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>
        },
        {
            id: 6,
            firstName: 'Buckley',
            lastName: 'Townsend',
            email: 'buckleytownsend@orbaxter.com',
            dob: '2011-05-29',
            address: {
                street: '131 Guernsey Street',
                city: 'Vallonia',
                zipcode: 6779,
                geo: {
                    lat: -2.681655,
                    lng: 3.528942,
                },
            },
            phone: '+1 (884) 595-2643',
            isActive: true,
            age: 40,
            company: 'OPPORTECH',
            actions: <div className="dropdown flex justify-center">
                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                    <ul>
                        <li>
                            <button type="button">Download</button>
                        </li>
                        <li>
                            <button type="button">Share</button>
                        </li>
                        <li>
                            <button type="button">Edit</button>
                        </li>
                        <li>
                            <button type="button">Delete</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>
        },
        {
            id: 7,
            firstName: 'Latoya',
            lastName: 'Bradshaw',
            email: 'latoyabradshaw@opportech.com',
            dob: '2010-11-23',
            address: {
                street: '668 Lenox Road',
                city: 'Lowgap',
                zipcode: 992,
                geo: {
                    lat: 36.026423,
                    lng: 130.412198,
                },
            },
            phone: '+1 (906) 474-3155',
            isActive: true,
            age: 24,
            company: 'GORGANIC',
            actions: <div className="dropdown flex justify-center">
                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                    <ul>
                        <li>
                            <button type="button">Download</button>
                        </li>
                        <li>
                            <button type="button">Share</button>
                        </li>
                        <li>
                            <button type="button">Edit</button>
                        </li>
                        <li>
                            <button type="button">Delete</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>
        },
        {
            id: 8,
            firstName: 'Kate',
            lastName: 'Lindsay',
            email: 'katelindsay@gorganic.com',
            dob: '1987-07-02',
            address: {
                street: '773 Harrison Avenue',
                city: 'Carlton',
                zipcode: 5909,
                geo: {
                    lat: 42.464724,
                    lng: -12.948403,
                },
            },
            phone: '+1 (930) 546-2952',
            isActive: true,
            age: 24,
            company: 'AVIT',
            actions: <div className="dropdown flex justify-center">
                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                    <ul>
                        <li>
                            <button type="button">Download</button>
                        </li>
                        <li>
                            <button type="button">Share</button>
                        </li>
                        <li>
                            <button type="button">Edit</button>
                        </li>
                        <li>
                            <button type="button">Delete</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>
        },
        {
            id: 9,
            firstName: 'Marva',
            lastName: 'Sandoval',
            email: 'marvasandoval@avit.com',
            dob: '2010-11-02',
            address: {
                street: '200 Malta Street',
                city: 'Tuskahoma',
                zipcode: 1292,
                geo: {
                    lat: -52.206169,
                    lng: 74.19452,
                },
            },
            phone: '+1 (927) 566-3600',
            isActive: false,
            age: 28,
            company: 'QUILCH',
            actions: <div className="dropdown flex justify-center">
                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                    <ul>
                        <li>
                            <button type="button">Download</button>
                        </li>
                        <li>
                            <button type="button">Share</button>
                        </li>
                        <li>
                            <button type="button">Edit</button>
                        </li>
                        <li>
                            <button type="button">Delete</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>
        },
        {
            id: 10,
            firstName: 'Decker',
            lastName: 'Russell',
            email: 'deckerrussell@quilch.com',
            dob: '1994-04-21',
            address: {
                street: '708 Bath Avenue',
                city: 'Coultervillle',
                zipcode: 1268,
                geo: {
                    lat: -41.550295,
                    lng: -146.598075,
                },
            },
            phone: '+1 (846) 535-3283',
            isActive: false,
            age: 27,
            company: 'MEMORA',
            actions: <div className="dropdown flex justify-center">
                <Dropdown offset={[0, 5]} placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`} button={<IconHorizontalDots className="opacity-70 m-auto" />}>
                    <ul>
                        <li>
                            <button type="button">Download</button>
                        </li>
                        <li>
                            <button type="button">Share</button>
                        </li>
                        <li>
                            <button type="button">Edit</button>
                        </li>
                        <li>
                            <button type="button">Delete</button>
                        </li>
                    </ul>
                </Dropdown>
            </div>
        },
        {
            id: 11,
            firstName: 'Odom',
            lastName: 'Mills',
            email: 'odommills@memora.com',
            dob: '2010-01-24',
            address: {
                street: '907 Blake Avenue',
                city: 'Churchill',
                zipcode: 4400,
                geo: {
                    lat: -56.061694,
                    lng: -130.238523,
                },
            },
            phone: '+1 (995) 525-3402',
            isActive: true,
            age: 34,
            company: 'ZORROMOP',
        },
        {
            id: 12,
            firstName: 'Sellers',
            lastName: 'Walters',
            email: 'sellerswalters@zorromop.com',
            dob: '1975-11-12',
            address: {
                street: '978 Oakland Place',
                city: 'Gloucester',
                zipcode: 3802,
                geo: {
                    lat: 11.732587,
                    lng: 96.118099,
                },
            },
            phone: '+1 (830) 430-3157',
            isActive: true,
            age: 28,
            company: 'ORBOID',
        },
        {
            id: 13,
            firstName: 'Wendi',
            lastName: 'Powers',
            email: 'wendipowers@orboid.com',
            dob: '1979-06-02',
            address: {
                street: '376 Greenpoint Avenue',
                city: 'Elliott',
                zipcode: 9149,
                geo: {
                    lat: -78.159578,
                    lng: -9.835103,
                },
            },
            phone: '+1 (863) 457-2088',
            isActive: true,
            age: 31,
            company: 'SNORUS',
        },
        {
            id: 14,
            firstName: 'Sophie',
            lastName: 'Horn',
            email: 'sophiehorn@snorus.com',
            dob: '2018-09-20',
            address: {
                street: '343 Doughty Street',
                city: 'Homestead',
                zipcode: 330,
                geo: {
                    lat: 65.484087,
                    lng: 137.413998,
                },
            },
            phone: '+1 (885) 418-3948',
            isActive: true,
            age: 22,
            company: 'XTH',
        },
        {
            id: 15,
            firstName: 'Levine',
            lastName: 'Rodriquez',
            email: 'levinerodriquez@xth.com',
            dob: '1973-02-08',
            address: {
                street: '643 Allen Avenue',
                city: 'Weedville',
                zipcode: 8931,
                geo: {
                    lat: -63.185586,
                    lng: 117.327808,
                },
            },
            phone: '+1 (999) 565-3239',
            isActive: true,
            age: 27,
            company: 'COMTRACT',
        },
        {
            id: 16,
            firstName: 'Little',
            lastName: 'Hatfield',
            email: 'littlehatfield@comtract.com',
            dob: '2012-01-03',
            address: {
                street: '194 Anthony Street',
                city: 'Williston',
                zipcode: 7456,
                geo: {
                    lat: 47.480837,
                    lng: 6.085909,
                },
            },
            phone: '+1 (812) 488-3011',
            isActive: false,
            age: 33,
            company: 'ZIDANT',
        },
        {
            id: 17,
            firstName: 'Larson',
            lastName: 'Kelly',
            email: 'larsonkelly@zidant.com',
            dob: '2010-06-14',
            address: {
                street: '978 Indiana Place',
                city: 'Innsbrook',
                zipcode: 639,
                geo: {
                    lat: -71.766732,
                    lng: 150.854345,
                },
            },
            phone: '+1 (892) 484-2162',
            isActive: true,
            age: 20,
            company: 'SUREPLEX',
        },
        {
            id: 18,
            firstName: 'Kendra',
            lastName: 'Molina',
            email: 'kendramolina@sureplex.com',
            dob: '2002-07-19',
            address: {
                street: '567 Charles Place',
                city: 'Kimmell',
                zipcode: 1966,
                geo: {
                    lat: 50.765816,
                    lng: -117.106499,
                },
            },
            phone: '+1 (920) 528-3330',
            isActive: false,
            age: 31,
            company: 'DANJA',
        },
        {
            id: 19,
            firstName: 'Ebony',
            lastName: 'Livingston',
            email: 'ebonylivingston@danja.com',
            dob: '1994-10-18',
            address: {
                street: '284 Cass Place',
                city: 'Navarre',
                zipcode: 948,
                geo: {
                    lat: 65.271256,
                    lng: -83.064729,
                },
            },
            phone: '+1 (970) 591-3039',
            isActive: false,
            age: 33,
            company: 'EURON',
        },
        {
            id: 20,
            firstName: 'Kaufman',
            lastName: 'Rush',
            email: 'kaufmanrush@euron.com',
            dob: '2011-07-10',
            address: {
                street: '408 Kingsland Avenue',
                city: 'Beaulieu',
                zipcode: 7911,
                geo: {
                    lat: 41.513153,
                    lng: 54.821641,
                },
            },
            phone: '+1 (924) 463-2934',
            isActive: false,
            age: 39,
            company: 'ILLUMITY',
        },
        {
            id: 21,
            firstName: 'Frank',
            lastName: 'Hays',
            email: 'frankhays@illumity.com',
            dob: '2005-06-15',
            address: {
                street: '973 Caton Place',
                city: 'Dargan',
                zipcode: 4104,
                geo: {
                    lat: 63.314988,
                    lng: -138.771323,
                },
            },
            phone: '+1 (930) 577-2670',
            isActive: false,
            age: 31,
            company: 'SYBIXTEX',
        },
        {
            id: 22,
            firstName: 'Carmella',
            lastName: 'Mccarty',
            email: 'carmellamccarty@sybixtex.com',
            dob: '1980-03-06',
            address: {
                street: '919 Judge Street',
                city: 'Canby',
                zipcode: 8283,
                geo: {
                    lat: 9.198597,
                    lng: -138.809971,
                },
            },
            phone: '+1 (876) 456-3218',
            isActive: true,
            age: 21,
            company: 'ZEDALIS',
        },
        {
            id: 23,
            firstName: 'Massey',
            lastName: 'Owen',
            email: 'masseyowen@zedalis.com',
            dob: '2012-03-01',
            address: {
                street: '108 Seaview Avenue',
                city: 'Slovan',
                zipcode: 3599,
                geo: {
                    lat: -74.648318,
                    lng: 99.620699,
                },
            },
            phone: '+1 (917) 567-3786',
            isActive: false,
            age: 40,
            company: 'DYNO',
        },
        {
            id: 24,
            firstName: 'Lottie',
            lastName: 'Lowery',
            email: 'lottielowery@dyno.com',
            dob: '1982-10-10',
            address: {
                street: '557 Meserole Avenue',
                city: 'Fowlerville',
                zipcode: 4991,
                geo: {
                    lat: 54.811546,
                    lng: -20.996515,
                },
            },
            phone: '+1 (912) 539-3498',
            isActive: true,
            age: 36,
            company: 'MULTIFLEX',
        },
        {
            id: 25,
            firstName: 'Addie',
            lastName: 'Luna',
            email: 'addieluna@multiflex.com',
            dob: '1988-05-01',
            address: {
                street: '688 Bulwer Place',
                city: 'Harmon',
                zipcode: 7664,
                geo: {
                    lat: -12.762766,
                    lng: -39.924497,
                },
            },
            phone: '+1 (962) 537-2981',
            isActive: true,
            age: 32,
            company: 'PHARMACON',
        },
    ];

    const getCurrentTime = () => {
        const now = new Date();
        // Format the time as HH:MM (24-hour format)
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const currentTime = getCurrentTime();

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

    const [page2, setPage2] = useState(1);
    const [pageSize2, setPageSize2] = useState(PAGE_SIZES[0]);
    const [initialRecords2, setInitialRecords2] = useState(rowData);
    const [recordsData2, setRecordsData2] = useState(initialRecords2);
    const [modal2, setModal2] = useState(false);
    const [modal4, setModal4] = useState(false);
    const [modal5, setModal5] = useState(false);
    const [modal6, setModal6] = useState(false);
    const [search2, setSearch2] = useState('');
    const [date1, setDate1] = useState('Date of Birth');
    const [sortable1, setSortable1] = useState(items1);

    useEffect(() => {
        setPage2(1);
    }, [pageSize2]);

    useEffect(() => {
        const from = (page2 - 1) * pageSize2;
        const to = from + pageSize2;
        setRecordsData2([...initialRecords2.slice(from, to)]);
    }, [page2, pageSize2, initialRecords2]);

    useEffect(() => {
        setInitialRecords2(() => {
            return rowData.filter((item) => {
                return (
                    item.id.toString().includes(search2.toLowerCase()) ||
                    item.firstName.toLowerCase().includes(search2.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(search2.toLowerCase()) ||
                    item.email.toLowerCase().includes(search2.toLowerCase()) ||
                    item.phone.toLowerCase().includes(search2.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search2]);

    const formatDate = (date) => {
        if (date) {
            const dt = new Date(date);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            return day + '/' + month + '/' + dt.getFullYear();
        }
        return '';
    };

    const randomColor = () => {
        const color = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
        const random = Math.floor(Math.random() * color.length);
        return color[random];
    };

    const randomStatus = () => {
        const status = ['PAID', 'APPROVED', 'FAILED', 'CANCEL', 'SUCCESS', 'PENDING', 'COMPLETE'];
        const random = Math.floor(Math.random() * status.length);
        return status[random];
    };

    const options4 = [
        { value: 'inProcess', label: 'In Process' },
        { value: 'Closed', label: 'Closed' },
    ];

    const namePrefix = [
        { value: 'Mr', label: 'Mr' },
        { value: 'Ms', label: 'Ms' },
        { value: 'Mrs', label: 'Mrs' },
    ];

    const branchesOptions = [
        { label: "SFK", value: "SFK", level: 1 },
        { label: "SFL", value: "SFL", level: 2 },
        { label: "SFI", value: "SFI", level: 3 },
        { label: "SFS", value: "SFS", level: 4 },
        { label: "SFH", value: "SFH", level: 5 },
        { label: "SFIR", value: "SFIR", level: 6 },
        { label: "SFC", value: "SFC", level: 7 },
    ];

    const dialingCodeOptions = [
        { label: "Afghanistan (+93)", level: 0 },
        { label: "Albania (+355)", level: 1 },
        { label: "Algeria (+213)", level: 2 },
        { label: "American Samoa (+1-684)", level: 3 },
        { label: "Andorra (+376)", level: 4 },
        { label: "Angola (+244)", level: 5 },
        { label: "Anguilla (+1-264)", level: 6 },
        { label: "Antarctica (+672)", level: 7 },
        { label: "Antigua and Barbuda (+1-268)", level: 8 },
        { label: "Argentina (+54)", level: 9 },
        { label: "Armenia (+374)", level: 10 },
        { label: "Aruba (+297)", level: 11 },
        { label: "Australia (+61)", level: 12 },
        { label: "Austria (+43)", level: 13 },
        { label: "Azerbaijan (+994)", level: 14 },
        { label: "Bahamas (+1-242)", level: 15 },
        { label: "Bahrain (+973)", level: 16 },
        { label: "Bangladesh (+880)", level: 17 },
        { label: "Barbados (+1-246)", level: 18 },
        { label: "Belarus (+375)", level: 19 },
        { label: "Belgium (+32)", level: 20 },
        { label: "Belize (+501)", level: 21 },
        { label: "Benin (+229)", level: 22 },
        { label: "Bermuda (+1-441)", level: 23 },
        { label: "Bhutan (+975)", level: 24 },
        { label: "Bolivia (+591)", level: 25 },
        { label: "Bosnia and Herzegovina (+387)", level: 26 },
        { label: "Botswana (+267)", level: 27 },
        { label: "Brazil (+55)", level: 28 },
        { label: "British Indian Ocean Territory (+246)", level: 29 },
        { label: "British Virgin Islands (+1-284)", level: 30 },
        { label: "Brunei (+673)", level: 31 },
        { label: "Bulgaria (+359)", level: 32 },
        { label: "Burkina Faso (+226)", level: 33 },
        { label: "Burundi (+257)", level: 34 },
        { label: "Cambodia (+855)", level: 35 },
        { label: "Cameroon (+237)", level: 36 },
        { label: "Canada (+1)", level: 37 },
        { label: "Cape Verde (+238)", level: 38 },
        { label: "Cayman Islands (+1-345)", level: 39 },
        { label: "Central African Republic (+236)", level: 40 },
        { label: "Chad (+235)", level: 41 },
        { label: "Chile (+56)", level: 42 },
        { label: "China (+86)", level: 43 },
        { label: "Christmas Island (+61)", level: 44 },
        { label: "Cocos Islands (+61)", level: 45 },
        { label: "Colombia (+57)", level: 46 },
        { label: "Comoros (+269)", level: 47 },
        { label: "Cook Islands (+682)", level: 48 },
        { label: "Costa Rica (+506)", level: 49 },
        { label: "Croatia (+385)", level: 50 },
        { label: "Cuba (+53)", level: 51 },
        { label: "Curacao (+599)", level: 52 },
        { label: "Cyprus (+357)", level: 53 },
        { label: "Czech Republic (+420)", level: 54 },
        { label: "Democratic Republic of the Congo (+243)", level: 55 },
        { label: "Denmark (+45)", level: 56 },
        { label: "Djibouti (+253)", level: 57 },
        { label: "Dominica (+1-767)", level: 58 },
        { label: "Dominican Republic (+1-809, +1-829, +1-849)", level: 59 },
        { label: "East Timor (+670)", level: 60 },
        { label: "Ecuador (+593)", level: 61 },
        { label: "Egypt (+20)", level: 62 },
        { label: "El Salvador (+503)", level: 63 },
        { label: "Equatorial Guinea (+240)", level: 64 },
        { label: "Eritrea (+291)", level: 65 },
        { label: "Estonia (+372)", level: 66 },
        { label: "Ethiopia (+251)", level: 67 },
        { label: "Falkland Islands (+500)", level: 68 },
        { label: "Faroe Islands (+298)", level: 69 },
        { label: "Fiji (+679)", level: 70 },
        { label: "Finland (+358)", level: 71 },
        { label: "France (+33)", level: 72 },
        { label: "French Guiana (+594)", level: 73 },
        { label: "French Polynesia (+689)", level: 74 },
        { label: "Gabon (+241)", level: 75 },
        { label: "Gambia (+220)", level: 76 },
        { label: "Georgia (+995)", level: 77 },
        { label: "Germany (+49)", level: 78 },
        { label: "Ghana (+233)", level: 79 },
        { label: "Gibraltar (+350)", level: 80 },
        { label: "Greece (+30)", level: 81 },
        { label: "Greenland (+299)", level: 82 },
        { label: "Grenada (+1-473)", level: 83 },
        { label: "Guadeloupe (+590)", level: 84 },
        { label: "Guam (+1-671)", level: 85 },
        { label: "Guatemala (+502)", level: 86 },
        { label: "Guernsey (+44-1481)", level: 87 },
        { label: "Guinea (+224)", level: 88 },
        { label: "Guinea-Bissau (+245)", level: 89 },
        { label: "Guyana (+592)", level: 90 },
        { label: "Haiti (+509)", level: 91 },
        { label: "Honduras (+504)", level: 92 },
        { label: "Hong Kong (+852)", level: 93 },
        { label: "Hungary (+36)", level: 94 },
        { label: "Iceland (+354)", level: 95 },
        { label: "India (+91)", level: 96 },
        { label: "Indonesia (+62)", level: 97 },
        { label: "Iran (+98)", level: 98 },
        { label: "Iraq (+964)", level: 99 },
        { label: "Ireland (+353)", level: 100 },
        { label: "Pakistan (+92)", level: 101 },
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

    return (
        <div className="space-y-6">
            <div className="panel">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h2 className="text-xl font-bold">Queries</h2>
                    </div>
                    <div className='flex gap-3'>
                        <input type="text" className="form-input w-auto" placeholder="Search..." value={search2} onChange={(e) => setSearch2(e.target.value)} />
                        <button type="button" className="btn btn-primary" onClick={() => setModal5(true)}>
                            Add Query
                        </button>
                    </div>
                </div>
                <div className="datatables">
                    <DataTable
                        highlightOnHover
                        className="whitespace-nowrap table-hover"
                        records={recordsData2}
                        columns={[
                            { accessor: 'id', title: 'ID' },
                            {
                                accessor: 'status',
                                title: 'Query Status',
                                render: () => <span className={`badge bg-${randomColor()} `}>{randomStatus()}</span>,
                            },
                            { accessor: 'company', title: 'Branch' },
                            {
                                accessor: 'firstName',
                                title: 'Complete Name',
                                render: ({ firstName, middleName, lastName, id }) => (
                                    <div className="flex items-center w-max">
                                        <img className="w-9 h-9 rounded-full ltr:mr-2 rtl:ml-2 object-cover" src={`/assets/images/profile-${id}.jpeg`} alt="" />
                                        <div>{firstName + ' ' + lastName + ' ' + lastName}</div>
                                    </div>
                                ),
                            },
                            { accessor: 'email', title: 'Email' },
                            {
                                accessor: 'firstName',
                                title: 'Owner',
                                render: ({ firstName, middleName, lastName, id }) => (
                                    <div className="flex items-center w-max justify-center -space-x-4">
                                        <Tippy content={firstName + ' ' + lastName}>
                                            <img className="w-9 h-9 rounded-full ltr:mr-2 rtl:ml-2 object-cover" src={`/assets/images/profile-${id}.jpeg`} alt="" />
                                        </Tippy>
                                        <Tippy content={firstName + ' ' + lastName}>
                                            <img className="w-9 h-9 rounded-full ltr:mr-2 rtl:ml-2 object-cover" src={`/assets/images/profile-${id}.jpeg`} alt="" />
                                        </Tippy>

                                    </div>
                                ),
                            },
                            {
                                accessor: 'dob',
                                title: 'Date of Birth',
                                render: ({ dob }) => <div>{formatDate(dob)}</div>,
                            },
                            { accessor: 'phone', title: 'Dialing Code' },
                            { accessor: 'phone', title: 'Phone No' },
                            { accessor: 'phone', title: 'Home No' },
                            { accessor: 'company', title: 'Qualification' },
                            { accessor: 'company', title: 'Institute Name' },
                            { accessor: 'company', title: 'Query Source' },
                            {
                                accessor: 'firstName',
                                title: 'Query Score',
                                render: ({ firstName }) => (
                                    <div className="flex items-center w-max">
                                        <div className="flex items-center justify-center text-warning">
                                            <IconStar className=" fill-warning" />
                                        </div>
                                        <div className='ml-2'>{firstName}</div>
                                    </div>
                                ),
                            },
                            {
                                accessor: 'firstName',
                                title: 'Query Campaign',
                                render: ({ firstName, id }) => (
                                    <div className="flex items-center w-max">
                                        <img className="w-9 h-9 rounded-full ltr:mr-2 rtl:ml-2 object-cover" src={`/assets/images/profile-${id}.jpeg`} alt="" />
                                        <div>{firstName}</div>
                                    </div>
                                ),
                            },
                            { accessor: 'actions', title: 'Actions' },

                        ]}
                        totalRecords={initialRecords2.length}
                        recordsPerPage={pageSize2}
                        page={page2}
                        onPageChange={(p) => setPage2(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize2}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                    />
                </div>
            </div>

            {/* Query Status Modal */}
            <Transition appear show={modal2} as={Fragment}>
                <Dialog as="div" open={modal2} onClose={() => setModal2(false)}>
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
                    <div id="fadein_up_modal" className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-[black]/60 h-screen">
                        <div className="flex items-center justify-center w-full px-4">
                            <Dialog.Panel
                                className={`panel animate__animated w-full max-w-md overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark ${isRtl ? 'animate__fadeInRight' : 'animate__fadeInLeft'
                                    }`}
                            >
                                <div className="flex items-center justify-between bg-[#fbfbfb] px-5 pt-6 dark:bg-[#121c2c]">
                                    <h5 className="text-xl font-bold">Query Status</h5>
                                </div>
                                <div className="px-5 pt-4 pb-5">
                                    <div className="mb-4">
                                        <Select
                                            placeholder="Select an option"
                                            options={options4}
                                        />
                                    </div>
                                    <div className="mt-8 flex items-center justify-end">
                                        <button onClick={() => setModal2(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal2(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Query View Modal */}
            <Transition appear show={modal4} as={Fragment}>
                <Dialog as="div" open={modal4} onClose={() => setModal4(false)}>
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
                                <Dialog.Panel as="div" className={`panel my-8 w-full h-[75vh] max-w-5xl overflow-auto rounded-lg border-0 p-0 text-black dark:text-white-dark px-6 py-4 animate__animated ${isRtl ? 'animate__fadeInRight' : 'animate__fadeInLeft'} relative`}>
                                    <Tab.Group>
                                        <Tab.List className="mt-3 flex flex-wrap gap-2">
                                            <Tab as={Fragment}>
                                                {({ selected }) => (
                                                    <button
                                                        className={`${selected ? 'bg-info text-white !outline-none' : ''}
                                                    before:inline-block' -mb-[1px] flex items-center rounded p-3.5 py-2 hover:bg-info hover:text-white`}
                                                    >
                                                        <IconUser className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                                                        Query Overview
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
                                                <div className="active pt-5">
                                                    <div className="">
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                                                            <div>
                                                                <ul id="example1">
                                                                    <ReactSortable
                                                                        list={sortable1}
                                                                        setList={setSortable1}
                                                                        animation={200}
                                                                        delay={2}
                                                                        ghostClass="gu-transit"
                                                                        group="shared"
                                                                    >
                                                                        {sortable1.slice(0, Math.ceil(sortable1.length / 2)).map((item) => (
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
                                                                    </ReactSortable>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <ul id="example2">
                                                                    <ReactSortable
                                                                        list={sortable1}
                                                                        setList={setSortable1}
                                                                        animation={200}
                                                                        delay={2}
                                                                        ghostClass="gu-transit"
                                                                        group="shared"
                                                                    >
                                                                        {sortable1.slice(Math.ceil(sortable1.length / 2)).map((item) => (
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
                                                                    </ReactSortable>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel>
                                                <div className="pt-5">
                                                    <div className="flex items-center justify-end mb-4">
                                                        <button type="button" className="btn btn-primary">
                                                            Add Schedule
                                                        </button>
                                                    </div>
                                                    <div className="datatables pb-5">
                                                        <DataTable
                                                            highlightOnHover
                                                            className="whitespace-nowrap table-hover"
                                                            records={rowData2}
                                                            columns={[
                                                                {
                                                                    accessor: 'date',
                                                                    title: 'Date',
                                                                    render: ({ date }) => <div>{formatDate(date)}</div>,
                                                                },
                                                                {
                                                                    accessor: 'time',
                                                                    title: 'Time',

                                                                },
                                                                { accessor: 'mode', title: 'Mode' },
                                                                {
                                                                    accessor: 'Offsest',
                                                                    title: 'Offset',
                                                                },
                                                                { accessor: 'company', title: 'Attended' },
                                                            ]}
                                                        />
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel>
                                                <div className="pt-5">
                                                    <div className="mb-5">
                                                        <div className="max-w-[900px] mx-auto text-center ltr:sm:text-left rtl:sm:text-right space-y-3 sm:space-y-0">
                                                            <div className="sm:flex items-center">
                                                                <p className="text-[#3b3f5c] dark:text-white-light text-base font-semibold p-2.5">09:00</p>
                                                                <div className="p-2.5 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-white-dark/20 after:rounded-full">
                                                                    <img src="/assets/images/profile-16.jpeg" alt="img" className="w-11 h-11 rounded-full relative z-[1] mx-auto" />
                                                                </div>
                                                                <p className="text-white-dark text-xs font-bold self-center sm:min-w-[100px] sm:max-w-[100px] p-2.5 mt-5 sm:mt-0">25 mins ago</p>
                                                                <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px] p-2.5">Conference call with Marketing Manager.</p>
                                                            </div>
                                                            <div className="sm:flex items-center">
                                                                <p className="text-[#3b3f5c] dark:text-white-light text-base font-semibold p-2.5">10:00</p>
                                                                <div className="p-2.5 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-white-dark/20 after:rounded-full">
                                                                    <img src="/assets/images/profile-1.jpeg" alt="img" className="w-11 h-11 rounded-full relative z-[1] mx-auto" />
                                                                </div>
                                                                <p className="text-white-dark text-xs font-bold self-center sm:min-w-[100px] sm:max-w-[100px] p-2.5 mt-5 sm:mt-0">2 hrs ago</p>
                                                                <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px] p-2.5">Server rebooted successfully</p>
                                                            </div>
                                                            <div className="sm:flex items-center">
                                                                <p className="text-[#3b3f5c] dark:text-white-light text-base font-semibold p-2.5">11:00</p>
                                                                <div className="p-2.5 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-white-dark/20 after:rounded-full">
                                                                    <img src="/assets/images/profile-2.jpeg" alt="img" className="w-11 h-11 rounded-full relative z-[1] mx-auto" />
                                                                </div>
                                                                <p className="text-white-dark text-xs font-bold self-center sm:min-w-[100px] sm:max-w-[100px] p-2.5 mt-5 sm:mt-0">4 hrs ago</p>
                                                                <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px] p-2.5">Backup Files EOD</p>
                                                            </div>
                                                            <div className="sm:flex items-center">
                                                                <p className="text-[#3b3f5c] dark:text-white-light text-base font-semibold p-2.5">12:00</p>
                                                                <div className="p-2.5 relative after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[25px] after:-bottom-[15px] after:w-0 after:h-auto after:border-l-2 after:border-white-dark/20 after:rounded-full">
                                                                    <img src="/assets/images/profile-3.jpeg" alt="img" className="w-11 h-11 rounded-full relative z-[1] mx-auto" />
                                                                </div>
                                                                <p className="text-white-dark text-xs font-bold self-center sm:min-w-[100px] sm:max-w-[100px] p-2.5 mt-5 sm:mt-0">6 hrs ago</p>
                                                                <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px] p-2.5">Collected documents from Sara</p>
                                                            </div>
                                                            <div className="sm:flex items-center">
                                                                <p className="text-[#3b3f5c] dark:text-white-light text-base font-semibold p-2.5">01:00</p>
                                                                <div className="p-2.5 relative">
                                                                    <img src="/assets/images/profile-4.jpeg" alt="img" className="w-11 h-11 rounded-full relative z-[1] mx-auto" />
                                                                </div>
                                                                <p className="text-white-dark text-xs font-bold self-center sm:min-w-[100px] sm:max-w-[100px] p-2.5 mt-5 sm:mt-0">9 hrs ago</p>
                                                                <p className="text-[#3b3f5c] dark:text-white-light font-semibold text-[13px] p-2.5">PDF file Download</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                        </Tab.Panels>
                                        <div className="mt-4 mb-2 flex absolute bottom-2 right-4">
                                            <button onClick={() => setModal4(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button onClick={() => setModal4(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </Tab.Group>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Query Create Modal */}
            <Transition appear show={modal5} as={Fragment}>
                <Dialog as="div" open={modal5} onClose={() => setModal5(false)}>
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
                    <div id="fadein_up_modal" className="fixed inset-0 z-[999] bg-[black]/60 flex items-center justify-center px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                as="div"
                                className={`panel w-full h-[75vh] max-w-5xl rounded-lg border-0 p-0 text-black dark:text-white-dark animate__animated ${isRtl ? 'animate__fadeInRight' : 'animate__fadeInLeft'
                                    } relative flex flex-col overflow-hidden`}
                            >
                                <div className="flex-grow overflow-y-auto px-6 pt-3">
                                    <EnquiryForm
                                        branchesOptions={branchesOptions}
                                        dialingCodeOptions={dialingCodeOptions}
                                        date1={date1}
                                        setDate1={setDate1}
                                        isRtl={isRtl}
                                        setModal5={setModal5}
                                        activeTab4={activeTab4}
                                        setActiveTab4={setActiveTab4}
                                    />
                                </div>
                                <div className="sticky bottom-0 left-0 w-full z-10 bg-white dark:bg-gray-800 px-6">
                                    <div className="flex justify-end gap-2 py-3">
                                        <button
                                            type="button"
                                            className={`btn btn-primary ${activeTab4 === 1 ? 'hidden' : ''}`}
                                            onClick={() =>
                                                setActiveTab4(activeTab4 === 5 ? 4 : activeTab4 === 4 ? 3 : activeTab4 === 3 ? 2 : 1)
                                            }
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() =>
                                                setActiveTab4(activeTab4 === 1 ? 2 : activeTab4 === 2 ? 3 : activeTab4 === 3 ? 4 : 5)
                                            }
                                        >
                                            Next
                                        </button>
                                        <button
                                            onClick={() => setModal5(false)}
                                            type="button"
                                            className="btn btn-outline-danger"
                                        >
                                            Discard
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>

            {/* Student Create Modal */}
            <Transition appear show={modal6} as={Fragment}>
                <Dialog as="div" open={modal6} onClose={() => setModal6(false)}>
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
                    <div id="fadein_up_modal" className="fixed inset-0 z-[999] bg-[black]/60 flex items-center justify-center px-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel
                                as="div"
                                className={`panel w-full h-[75vh] max-w-5xl rounded-lg border-0 p-0 text-black dark:text-white-dark animate__animated ${isRtl ? 'animate__fadeInRight' : 'animate__fadeInLeft'
                                    } relative flex flex-col overflow-hidden`}
                            >
                                <div className="flex-grow overflow-y-auto px-6 pt-3">
                                    <RegistrationForm
                                        branchesOptions={branchesOptions}
                                        dialingCodeOptions={dialingCodeOptions}
                                        date1={date1}
                                        setDate1={setDate1}
                                        isRtl={isRtl}
                                        setModal5={setModal5}
                                        activeTab4={activeTab4}
                                        setActiveTab4={setActiveTab4}
                                    />
                                </div>
                                <div className="sticky bottom-0 left-0 w-full z-10 bg-white dark:bg-gray-800 px-6">
                                    <div className="flex justify-end gap-2 py-3">
                                        <button
                                            type="button"
                                            className={`btn btn-primary ${activeTab4 === 1 ? 'hidden' : ''}`}
                                            onClick={() => setActiveTab4((prevTab) => (prevTab > 1 ? prevTab - 1 : 1))}
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn btn-primary`}
                                            onClick={() => setActiveTab4((prevTab) => (prevTab < 11 ? prevTab + 1 : 11))}
                                        >
                                            Next
                                        </button>
                                        <button
                                            onClick={() => setModal6(false)}
                                            type="button"
                                            className="btn btn-outline-danger"
                                        >
                                            Discard
                                        </button>
                                    </div>

                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default Basic;
