import { useEffect, useState } from 'react';
import Flatpickr from 'react-flatpickr';
import Select from 'react-select';
import 'flatpickr/dist/flatpickr.css';
import ReactApexChart from 'react-apexcharts';
import Dropdown from '../components/Dropdown';
import IconPlus from '../components/Icon/IconPlus';
import IconMail from '../components/Icon/IconMail';
import IconFile from '../components/Icon/IconFile';
import PerfectScrollbar from 'react-perfect-scrollbar';
import IconChecks from '../components/Icon/IconChecks';
import IconServer from '../components/Icon/IconServer';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';

const Index = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('DashBoard'));
    }, [dispatch]);

    const [date1, setDate1] = useState('Date of Birth');

    const isDark = useSelector((state) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl';

    // columnChartOptions
    const columnChart = {
        series: [
            {
                name: 'In Process Leads',
                data: [44, 55, 57, 56, 61, 58, 63],
            },
            {
                name: 'Closed Leads',
                data: [76, 85, 101, 98, 87, 105, 91],
            },
            {
                name: 'Move to Query',
                data: [46, 75, 91, 98, 97, 85, 91],
            },
        ],
        options: {
            chart: {
                height: 300,
                type: 'bar',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['rgb(254,188,59)', 'rgb(38,160,252)', 'rgb(38,231,166)'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                categories: ['SFK', 'SFL', 'SFI', 'SFS', 'SFH', 'SFIR', 'SFC'],
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
            legend: {
                position: "top",
            },
        },
    };

    // simpleColumnStackedOptions
    const simpleColumnStacked = {
        series: [
            {
                name: 'In Process Queries',
                data: [44, 55, 57, 56, 61, 58, 63],
            },
            {
                name: 'Closed Queries',
                data: [76, 85, 101, 98, 87, 105, 91],
            },
            {
                name: 'Move to Registration',
                data: [46, 75, 91, 98, 97, 85, 91],
            },
        ],
        options: {
            chart: {
                height: 300,
                type: 'bar',
                stacked: true,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['rgb(254,188,59)', 'rgb(38,160,252)', 'rgb(38,231,166)'],
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            xaxis: {
                categories: ['SFK', 'SFL', 'SFI', 'SFS', 'SFH', 'SFIR', 'SFC'],
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -20 : 0,
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            legend: {
                position: 'top',
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
            },
            fill: {
                opacity: 0.8,
            },
        },
    };

    const branchesOptions = [
        { label: "SFK", value: "SFK", level: 1 },
        { label: "SFL", value: "SFL", level: 2 },
        { label: "SFI", value: "SFI", level: 3 },
        { label: "SFS", value: "SFS", level: 4 },
        { label: "SFH", value: "SFH", level: 5 },
        { label: "SFIR", value: "SFIR", level: 6 },
        { label: "SFC", value: "SFC", level: 7 },
    ];

    return (
        <div>
            <div className="panel h-full flex justify-between px-5 py-5">
                <div className="flex items-start mt-2 mb-3">
                    <div className="shrink-0 ring-2 ring-white-light dark:ring-dark rounded-full ltr:mr-4 rtl:ml-4 mt-1">
                        <img src="/assets/images/profile-1.jpeg" alt="profile1" className="w-12 h-12 rounded-full object-cover" />
                    </div>
                    <div className="font-semibold">
                        <h1 className="text-2xl">Hello Jimmy Turner</h1>
                        <p className="text-lg text-white-dark">Branch Manager</p>
                    </div>
                </div>
                <div className="font-semibold  mt-2 mb-3">
                    <p className="text-md text-white-dark">Monday, Nov 18</p>
                </div>
            </div>

            {/* <div className="panel h-full px-5 py-5 mt-4">
                <div className=" flex justify-between gap-3">
                    <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-12" onChange={(date) => setDate1(date)} placeholder='From' />
                    <Flatpickr value={date1} options={{ dateFormat: 'Y-m-d', position: isRtl ? 'auto right' : 'auto left' }} className="form-input h-12" onChange={(date) => setDate1(date)} placeholder='To' />
                    <div className="w-full">
                        <Select
                            options={branchesOptions}
                            isSearchable={true}
                            placeholder="Branch"
                            className="w-full"
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    height: '3rem',
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
                            placeholder="Users"
                            className="w-full h-14"
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    height: '3rem',
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
                    <button
                        type="button"
                        className='btn btn-primary h-12'
                    >
                        Search
                    </button>
                </div>
                <div></div>
            </div> */}

            <div className="grid grid-cols-1 gap-7 pt-5">
                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white">Leads Status</h5>
                    </div>
                    <div className="mb-5">
                        <ReactApexChart series={columnChart.series} options={columnChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} />
                    </div>
                </div>

                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white">Query Status</h5>
                    </div>
                    <div className="mb-5">
                        <ReactApexChart
                            series={simpleColumnStacked.series}
                            options={simpleColumnStacked.options}
                            className="rounded-lg bg-white dark:bg-black overflow-hidden"
                            type="bar"
                            height={300}
                            width={'100%'}
                        />
                    </div>
                </div>

                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white">Registration Status</h5>
                    </div>
                    <div className="mb-5">
                        <ReactApexChart series={columnChart.series} options={columnChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} />
                    </div>
                </div>

                <div className="panel">
                    <div className="mb-5 flex items-center justify-between">
                        <h5 className="text-lg font-semibold dark:text-white">Processing Status</h5>
                    </div>
                    <div className="mb-5">
                        <ReactApexChart
                            series={simpleColumnStacked.series}
                            options={simpleColumnStacked.options}
                            className="rounded-lg bg-white dark:bg-black overflow-hidden"
                            type="bar"
                            height={300}
                            width={'100%'}
                        />
                    </div>
                </div>
            </div>

            <div className="panel h-full mt-7 mb-5">
                <div className="flex items-start justify-between dark:text-white-light mb-5 -mx-5 p-5 pt-0 border-b border-white-light
                 dark:border-[#1b2e4b]">
                    <h5 className="font-semibold text-lg ">Recent Activities</h5>
                    <div className="dropdown">
                        <Dropdown
                            offset={[0, 5]}
                            placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                            btnClassName="hover:text-primary"
                            button={<IconHorizontalDots className="text-black/70 dark:text-white/70 hover:!text-primary" />}
                        >
                            <ul>
                                <li>
                                    <button type="button">View All</button>
                                </li>
                                <li>
                                    <button type="button">Mark as Read</button>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>
                </div>
                <PerfectScrollbar className="perfect-scrollbar relative h-[360px] ltr:pr-3 rtl:pl-3 ltr:-mr-3 rtl:-ml-3">
                    <div className="space-y-7">
                        <div className="flex">
                            <div className="shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                <div className="bg-secondary shadow shadow-secondary w-8 h-8 rounded-full flex items-center justify-center text-white">
                                    <IconPlus className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <h5 className="font-semibold dark:text-white-light">
                                    New project created :{' '}
                                    <button type="button" className="text-success">
                                        [Admin Template]
                                    </button>
                                </h5>
                                <p className="text-white-dark text-xs">27 Feb, 2020</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                <div className="bg-success shadow-success w-8 h-8 rounded-full flex items-center justify-center text-white">
                                    <IconMail className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <h5 className="font-semibold dark:text-white-light">
                                    Mail sent to{' '}
                                    <button type="button" className="text-white-dark">
                                        HR
                                    </button>{' '}
                                    and{' '}
                                    <button type="button" className="text-white-dark">
                                        Admin
                                    </button>
                                </h5>
                                <p className="text-white-dark text-xs">28 Feb, 2020</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white">
                                    <IconChecks className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <h5 className="font-semibold dark:text-white-light">Server Logs Updated</h5>
                                <p className="text-white-dark text-xs">27 Feb, 2020</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                <div className="bg-danger w-8 h-8 rounded-full flex items-center justify-center text-white">
                                    <IconChecks className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <h5 className="font-semibold dark:text-white-light">
                                    Task Completed :
                                    <button type="button" className="text-success ml-1">
                                        [Backup Files EOD]
                                    </button>
                                </h5>
                                <p className="text-white-dark text-xs">01 Mar, 2020</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="shrink-0 ltr:mr-2 rtl:ml-2 relative z-10 before:w-[2px] before:h-[calc(100%-24px)] before:bg-white-dark/30 before:absolute before:top-10 before:left-4">
                                <div className="bg-warning w-8 h-8 rounded-full flex items-center justify-center text-white">
                                    <IconFile className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <h5 className="font-semibold dark:text-white-light">
                                    Documents Submitted from <button type="button">Sara</button>
                                </h5>
                                <p className="text-white-dark text-xs">10 Mar, 2020</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="ltr:mr-2 rtl:ml-2">
                                <div className="bg-dark w-8 h-8 rounded-full flex items-center justify-center text-white">
                                    <IconServer className="w-4 h-4" />
                                </div>
                            </div>
                            <div>
                                <h5 className="font-semibold dark:text-white-light">Server rebooted successfully</h5>
                                <p className="text-white-dark text-xs">06 Apr, 2020</p>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
        </div>
    );
};

export default Index;
