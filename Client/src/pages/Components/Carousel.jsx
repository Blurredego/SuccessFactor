import { Link } from 'react-router-dom';
import { DataTable } from 'mantine-datatable';
import { Tab } from '@headlessui/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconCode from '../../components/Icon/IconCode';
import IconHome from '../../components/Icon/IconHome';
import IconUser from '../../components/Icon/IconUser';
import IconPhone from '../../components/Icon/IconPhone';
import Dropdown from '../../components/Dropdown';
import IconPencil from '../../components/Icon/IconPencil';
import IconTrashLines from '../../components/Icon/IconTrashLines';
import IconSquareRotated from '../../components/Icon/IconSquareRotated';
import Scrumboard from '../Apps/Scrumboard';
import IconX from '../../components/Icon/IconX';


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

const Carousel = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Student Detail'));
    });

    const [selectedValue, setSelectedValue] = useState('Active Applications');

    const handleSelect = (value) => {
        setSelectedValue(value);
    };

    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [recordsData, setRecordsData] = useState(rowData);
    const [search, setSearch] = useState('');
    const [modal3, setModal3] = useState(false);
    const [activeTab4, setActiveTab4] = useState(1);
    const [date1, setDate1] = useState('Date of Birth');

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...recordsData.slice(from, to)]);
    }, [page, pageSize, recordsData]);

    useEffect(() => {
        setRecordsData(() => {
            return rowData.filter((item) => {
                return (
                    item.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(search.toLowerCase()) ||
                    item.company.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.age.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.dob.toLowerCase().includes(search.toLowerCase()) ||
                    item.phone.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const [images2, setImages2] = useState([]);
    const maxNumber = 69;

    const onChange2 = (imageList, addUpdateIndex) => {
        setImages2(imageList);
    };


    return (
        <>
            <div className="panel h-full flex justify-between px-5 py-6">
                <div className="flex items-start">
                    <div className="shrink-0 ring-2 ring-white-light dark:ring-dark rounded-full ltr:mr-4 rtl:ml-4 my-auto">
                        <img src="/assets/images/profile-1.jpeg" alt="profile1" className="w-14 h-14 rounded-full object-cover" />
                    </div>
                    <div className="font-semibold my-auto">
                        <h1 className="text-xl">Jimmy Turner</h1>
                        <p className="text-sm text-white-dark"># 00024-24-0624</p>
                    </div>
                </div>
                <div className="font-semibold my-auto">
                    <h1 className="text-xl">Branch</h1>
                    <p className="text-sm text-white-dark">SFL</p>
                </div>
                <div className="font-semibold my-auto">
                    <h1 className="text-xl">Counsellor</h1>
                    <p className="text-sm text-white-dark">New User</p>
                </div>
                <div className="font-semibold my-auto">
                    <h1 className="text-xl">Application Officer</h1>
                    <p className="text-sm text-white-dark">App Officer</p>
                </div>
                <div className="my-auto">
                    <button type="button" className="btn btn-primary rounded-full w-[140px] h-[45px]">
                        Edit Student
                    </button>
                </div>
            </div>
            <div className="panel mt-5" id="line">
                <div className="mb-5 ">
                    <Tab.Group>
                        <Tab.List className=" flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                    >
                                        <IconUser className="ltr:mr-2 rtl:ml-2" />
                                        Info
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                    >
                                        <IconUser className="ltr:mr-2 rtl:ml-2" />
                                        Summary
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                    >
                                        <IconUser className="ltr:mr-2 rtl:ml-2" />
                                        Working Sheets
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                    >
                                        <IconUser className="ltr:mr-2 rtl:ml-2" />
                                        Documents
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                    >
                                        <IconUser className="ltr:mr-2 rtl:ml-2" />
                                        Tasks
                                    </button>
                                )}
                            </Tab>
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                    >
                                        <IconUser className="ltr:mr-2 rtl:ml-2" />
                                        Applications
                                    </button>
                                )}
                            </Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="active pt-5">
                                    <div className="flex flex-row gap-5 ">
                                        <div className={`panel p-0 w-96`}>
                                            <div className={`w-full flex items-center py-6 px-5 bg-primary`}>
                                                <div className="text-2xl font-semibold text-white">About Jimmy Turner</div>
                                            </div>
                                            <div className=' divide-y'>
                                                <div className={`w-full flex flex-col py-4 px-5`}>
                                                    <div className="text-lg font-semibold">Email</div>
                                                    <div className="text-md">myzexehevi@mailinator.com</div>
                                                </div>
                                                <div className={`w-full flex flex-col py-4 px-5`}>
                                                    <div className="text-lg font-semibold">Date of Birth</div>
                                                    <div className="text-md">1971-12-02</div>
                                                </div>
                                                <div className={`w-full flex flex-col py-4 px-5`}>
                                                    <div className="text-lg font-semibold">Address Line 1</div>
                                                    <div className="text-md">House # 2, Street 1</div>
                                                </div>
                                                <div className={`w-full flex flex-col py-4 px-5`}>
                                                    <div className="text-lg font-semibold">Address Line 2</div>
                                                    <div className="text-md">KLP Lahore</div>
                                                </div>
                                                <div className={`w-full flex flex-col py-4 px-5`}>
                                                    <div className="text-lg font-semibold">Country</div>
                                                    <div className="text-md">Albania</div>
                                                </div>
                                                <div className={`w-full flex flex-col py-4 px-5`}>
                                                    <div className="text-lg font-semibold">City</div>
                                                    <div className="text-md">Bajram Curri</div>
                                                </div>
                                                <div className={`w-full flex flex-col py-4 px-5`}>
                                                    <div className="text-lg font-semibold">Dialing Code</div>
                                                    <div className="text-md">Andorra (+376)</div>
                                                </div>
                                                <div className={`w-full flex flex-col py-4 px-5`}>
                                                    <div className="text-lg font-semibold">Home Number</div>
                                                    <div className="text-md">012337554193</div>
                                                </div>
                                                <div className={`w-full flex flex-col py-4 px-5`}>
                                                    <div className="text-lg font-semibold">Parents Number</div>
                                                    <div className="text-md">012337554193</div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="panel p-0 flex-1">
                                            <div className={`w-full flex items-center py-6 px-5 bg-primary`}>
                                                <div className="text-2xl font-semibold text-white">{selectedValue}</div>
                                                <div className="dropdown">
                                                    <Dropdown
                                                        offset={[0, 5]}
                                                        placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                                                        button={
                                                            <span>
                                                                <IconSquareRotated
                                                                    className='size-5 ml-2 fill-white text-white mt-[2px]'
                                                                />
                                                            </span>
                                                        }
                                                    >
                                                        <ul className="text-sm font-medium w-[160px]">
                                                            <li>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleSelect('Active Applications')}
                                                                >
                                                                    Active Applications
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleSelect('Closed Applications')}
                                                                >
                                                                    Closed Applications
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            {selectedValue === "Active Applications" ?
                                                <div className="datatables p-5 h-[45rem]">
                                                    <DataTable
                                                        highlightOnHover
                                                        className="whitespace-nowrap table-hover"
                                                        records={recordsData}
                                                        columns={[
                                                            { accessor: 'id', title: 'ID' },
                                                            { accessor: 'company', title: 'University Name' },
                                                            { accessor: 'company', title: 'Intended Course' },
                                                            { accessor: 'company', title: 'InTake' },
                                                            { accessor: 'company', title: 'Status' },

                                                        ]}
                                                        totalRecords={recordsData.length}
                                                        recordsPerPage={pageSize}
                                                        page={page}
                                                        onPageChange={(p) => setPage(p)}
                                                        recordsPerPageOptions={PAGE_SIZES}
                                                        onRecordsPerPageChange={setPageSize}
                                                        minHeight={200}
                                                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                                                    />
                                                </div>
                                                :
                                                <div className="datatables p-5 h-[45rem]">
                                                    <DataTable
                                                        highlightOnHover
                                                        className="whitespace-nowrap table-hover"
                                                        records={recordsData}
                                                        columns={[
                                                            { accessor: 'id', title: 'ID' },
                                                            { accessor: 'company', title: 'University Name' },
                                                            { accessor: 'company', title: 'Intended Course' },
                                                            { accessor: 'company', title: 'InTake' },
                                                            { accessor: 'company', title: 'Status' },

                                                        ]}
                                                        totalRecords={recordsData.length}
                                                        recordsPerPage={pageSize}
                                                        page={page}
                                                        onPageChange={(p) => setPage(p)}
                                                        recordsPerPageOptions={PAGE_SIZES}
                                                        onRecordsPerPageChange={setPageSize}
                                                        minHeight={200}
                                                        paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                                                    />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-5 mt-5">
                                        <div className={`panel p-4 w-96`}>
                                            <Tab.Group>
                                                <Tab.List className=" flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                                                    <Tab as={Fragment}>
                                                        {({ selected }) => (
                                                            <button
                                                                className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                                            >
                                                                <IconUser className="ltr:mr-2 rtl:ml-2" />
                                                                Create Note
                                                            </button>
                                                        )}
                                                    </Tab>
                                                </Tab.List>
                                                <Tab.Panels>
                                                    <Tab.Panel>
                                                        <div className='mt-4'>
                                                            <textarea rows={6} className="form-textarea" placeholder='Enter Text Here ..'></textarea>
                                                        </div>
                                                        <div className='flex justify-end mt-2'>
                                                            <button type="button" className="btn btn-primary " onClick={() => setModal3(true)}>
                                                                Create Note
                                                            </button>
                                                        </div>
                                                    </Tab.Panel>
                                                </Tab.Panels>
                                            </Tab.Group>
                                        </div>
                                        <div className="panel p-4 flex-1">
                                            <Tab.Group>
                                                <Tab.List className=" flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                                                    <Tab as={Fragment}>
                                                        {({ selected }) => (
                                                            <button
                                                                className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                                            >
                                                                <IconUser className="ltr:mr-2 rtl:ml-2" />
                                                                Notes
                                                            </button>
                                                        )}
                                                    </Tab>
                                                    <Tab as={Fragment}>
                                                        {({ selected }) => (
                                                            <button
                                                                className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                                            >
                                                                <IconUser className="ltr:mr-2 rtl:ml-2" />
                                                                Tasks
                                                            </button>
                                                        )}
                                                    </Tab>
                                                </Tab.List>
                                                <Tab.Panels>
                                                    <Tab.Panel>
                                                        <div className="mt-3">
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
                                                    </Tab.Panel>
                                                    <Tab.Panel>
                                                        <div className="mt-3 overflow-auto">
                                                            {/* <Scrumboard /> */}
                                                        </div>
                                                    </Tab.Panel>
                                                </Tab.Panels>
                                            </Tab.Group>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div>
                                    <div className="flex items-start pt-5">
                                        <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                                            <img
                                                src="/assets/images/profile-34.jpeg"
                                                alt="img"
                                                className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                                            />
                                        </div>
                                        <div className="flex-auto">
                                            <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                                            <p className="text-white-dark">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                                viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="pt-4">
                                    <div className="datatables">
                                        <div className="flex justify-end mb-3">
                                            <button type="button" className="btn btn-primary">
                                                Create Working Sheet
                                            </button>
                                        </div>
                                        <DataTable
                                            highlightOnHover
                                            className="whitespace-nowrap table-hover"
                                            records={recordsData}
                                            columns={[
                                                { accessor: 'id', title: 'ID' },
                                                { accessor: 'company', title: 'University Name' },
                                                { accessor: 'company', title: 'Intended Course' },
                                                { accessor: 'company', title: 'Application Deadline' },
                                                { accessor: 'company', title: 'Course Link' },
                                                { accessor: 'company', title: 'Tuition Fee' },
                                                { accessor: 'company', title: 'Status' },
                                                {
                                                    accessor: 'action',
                                                    title: 'Actions',
                                                    titleClassName: '!text-center',
                                                    render: () => (
                                                        <div className="flex items-center w-max mx-auto gap-2">
                                                            <Tippy content="Edit">
                                                                <button type="button">
                                                                    <IconPencil />
                                                                </button>
                                                            </Tippy>
                                                            <Tippy content="Delete">
                                                                <button type="button">
                                                                    <IconTrashLines />
                                                                </button>
                                                            </Tippy>
                                                        </div>
                                                    ),
                                                },

                                            ]}
                                            totalRecords={recordsData.length}
                                            recordsPerPage={pageSize}
                                            page={page}
                                            onPageChange={(p) => setPage(p)}
                                            recordsPerPageOptions={PAGE_SIZES}
                                            onRecordsPerPageChange={setPageSize}
                                            minHeight={200}
                                            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                                        />
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="multiple-file-upload mt-4">
                                    <div className="mb-5">
                                        <div className="custom-file-container" data-upload-id="mySecondImage">
                                            <div className="label-container">
                                                <label>Upload </label>
                                                <button
                                                    type="button"
                                                    className="custom-file-container__image-clear"
                                                    title="Clear Image"
                                                    onClick={() => {
                                                        setImages2([]);
                                                    }}
                                                >
                                                    ×
                                                </button>
                                            </div>
                                            <label className="custom-file-container__custom-file"></label>
                                            <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
                                            <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
                                            <ImageUploading multiple value={images2} onChange={onChange2} maxNumber={maxNumber}>
                                                {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                                    <div className="upload__image-wrapper">
                                                        <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                                                            Choose File...
                                                        </button>
                                                        &nbsp;
                                                        <div className="grid gap-4 sm:grid-cols-3 grid-cols-1">
                                                            {imageList.map((image, index) => (
                                                                <div key={index} className="custom-file-container__image-preview relative">
                                                                    <button
                                                                        type="button"
                                                                        className="custom-file-container__image-clear bg-dark-light dark:bg-dark dark:text-white-dark rounded-full block w-fit p-0.5 absolute top-0 left-0"
                                                                        title="Clear Image"
                                                                        onClick={() => onImageRemove(index)}
                                                                    >
                                                                        <IconX className="w-3 h-3" />
                                                                    </button>
                                                                    <img src={image.dataURL} alt="img" className="object-cover shadow rounded w-full !max-h-48" />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </ImageUploading>
                                            {images2.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
                                        </div>
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="mt-3">
                                    <Tab.Group>
                                        <Tab.List className=" flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                                            <Tab as={Fragment}>
                                                {({ selected }) => (
                                                    <button
                                                        className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                                    >
                                                        <IconUser className="ltr:mr-2 rtl:ml-2" />
                                                        Create Note
                                                    </button>
                                                )}
                                            </Tab>
                                        </Tab.List>
                                        <Tab.Panels>
                                            <Tab.Panel>
                                                <div className='mt-4'>
                                                    <textarea rows={6} className="form-textarea" placeholder='Enter Text Here ..'></textarea>
                                                </div>
                                                <div className='flex justify-end mt-2'>
                                                    <button type="button" className="btn btn-primary " onClick={() => setModal3(true)}>
                                                        Create Note
                                                    </button>
                                                </div>
                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>
                                </div>
                                <div className="mt-3">
                                    <Tab.Group>
                                        <Tab.List className=" flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                                            <Tab as={Fragment}>
                                                {({ selected }) => (
                                                    <button
                                                        className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                                    >
                                                        <IconUser className="ltr:mr-2 rtl:ml-2" />
                                                        Notes
                                                    </button>
                                                )}
                                            </Tab>
                                            <Tab as={Fragment}>
                                                {({ selected }) => (
                                                    <button
                                                        className={`${selected ? 'text-primary !outline-none before:!w-full' : ''}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-2 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-primary before:transition-all before:duration-700 hover:text-primary hover:before:w-full text-lg font-semibold`}
                                                    >
                                                        <IconUser className="ltr:mr-2 rtl:ml-2" />
                                                        Tasks
                                                    </button>
                                                )}
                                            </Tab>
                                        </Tab.List>
                                        <Tab.Panels>
                                            <Tab.Panel>
                                                <div className="mt-4">
                                                    <div className=" mx-auto text-center ltr:sm:text-left rtl:sm:text-right space-y-3 sm:space-y-0">
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
                                            </Tab.Panel>
                                            <Tab.Panel>
                                                <div className="mt-4">
                                                    <Scrumboard />
                                                </div>
                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className={`w-full flex items-center py-6 px-5 bg-primary mt-5`}>
                                    <div className="text-2xl font-semibold text-white">{selectedValue}</div>
                                    <div className="dropdown">
                                        <Dropdown
                                            offset={[0, 5]}
                                            placement={`${isRtl ? 'bottom-end' : 'bottom-start'}`}
                                            button={
                                                <span>
                                                    <IconSquareRotated
                                                        className='size-5 ml-2 fill-white text-white mt-[2px]'
                                                    />
                                                </span>
                                            }
                                        >
                                            <ul className="text-sm font-medium w-[160px]">
                                                <li>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleSelect('Active Applications')}
                                                    >
                                                        Active Applications
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleSelect('Closed Applications')}
                                                    >
                                                        Closed Applications
                                                    </button>
                                                </li>
                                            </ul>
                                        </Dropdown>
                                    </div>
                                </div>
                                {selectedValue === "Active Applications" ?
                                    <div className="datatables p-5">
                                        <DataTable
                                            highlightOnHover
                                            className="whitespace-nowrap table-hover"
                                            records={recordsData}
                                            columns={[
                                                { accessor: 'id', title: 'ID' },
                                                { accessor: 'company', title: 'University Name' },
                                                { accessor: 'company', title: 'Intended Course' },
                                                { accessor: 'company', title: 'InTake' },
                                                { accessor: 'company', title: 'Status' },
                                                {
                                                    accessor: 'action',
                                                    title: 'Actions',
                                                    titleClassName: '!text-center',
                                                    render: () => (
                                                        <div className="flex items-center w-max mx-auto gap-2">
                                                            <Tippy content="Edit">
                                                                <button type="button">
                                                                    <IconPencil />
                                                                </button>
                                                            </Tippy>
                                                            <Tippy content="Delete">
                                                                <button type="button">
                                                                    <IconTrashLines />
                                                                </button>
                                                            </Tippy>
                                                        </div>
                                                    ),
                                                },

                                            ]}
                                            totalRecords={recordsData.length}
                                            recordsPerPage={pageSize}
                                            page={page}
                                            onPageChange={(p) => setPage(p)}
                                            recordsPerPageOptions={PAGE_SIZES}
                                            onRecordsPerPageChange={setPageSize}
                                            minHeight={200}
                                            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                                        />
                                    </div>
                                    :
                                    <div className="datatables p-5 h-[45rem]">
                                        <DataTable
                                            highlightOnHover
                                            className="whitespace-nowrap table-hover"
                                            records={recordsData}
                                            columns={[
                                                { accessor: 'id', title: 'ID' },
                                                { accessor: 'company', title: 'University Name' },
                                                { accessor: 'company', title: 'Intended Course' },
                                                { accessor: 'company', title: 'InTake' },
                                                { accessor: 'company', title: 'Status' },
                                                {
                                                    accessor: 'action',
                                                    title: 'Actions',
                                                    titleClassName: '!text-center',
                                                    render: () => (
                                                        <div className="flex items-center w-max mx-auto gap-2">
                                                            <Tippy content="Edit">
                                                                <button type="button">
                                                                    <IconPencil />
                                                                </button>
                                                            </Tippy>
                                                            <Tippy content="Delete">
                                                                <button type="button">
                                                                    <IconTrashLines />
                                                                </button>
                                                            </Tippy>
                                                        </div>
                                                    ),
                                                },

                                            ]}
                                            totalRecords={recordsData.length}
                                            recordsPerPage={pageSize}
                                            page={page}
                                            onPageChange={(p) => setPage(p)}
                                            recordsPerPageOptions={PAGE_SIZES}
                                            onRecordsPerPageChange={setPageSize}
                                            minHeight={200}
                                            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                                        />
                                    </div>
                                }
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

            </div>

        </>
    );
};

export default Carousel;
