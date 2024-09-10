import React from 'react';
import Dropdown from '../../components/Dropdown';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector } from 'react-redux';
import IconPlus from '../../components/Icon/IconPlus';
import IconMail from '../../components/Icon/IconMail';
import IconChecks from '../../components/Icon/IconChecks';
import IconFile from '../../components/Icon/IconFile';
import IconServer from '../../components/Icon/IconServer';
import IconHorizontalDots from '../../components/Icon/IconHorizontalDots';

const RecentActivities = () => {

    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl';

    return (
        <>
            <div className="panel h-full mt-5">
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
        </>
    )
}

export default RecentActivities;
