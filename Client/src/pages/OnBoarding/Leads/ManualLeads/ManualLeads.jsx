import { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../../../store/themeConfigSlice';
import { Dialog, Transition } from '@headlessui/react';
import LeadStatusModal from './LeadStatusModal';
import LeadCreateModal from './LeadCreateModal';
import LeadsTable from './LeadsTable';
import LeadScoreModal from './LeadScoreModal';
import LeadCampaignModal from './LeadCampaignModal';
import LeadCollaboratorModal from './LeadCollaboratorModal';
import LeadViewModal from './LeadViewModal';
import LeadToQueryModal from './LeadToQueryModal';

const ManualLeads = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Manual Leads'));
    });

    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [statusModal, setStatusModal] = useState(false);
    const [scoreModal, setScoreModal] = useState(false);
    const [campaignModal, setCampaignModal] = useState(false);
    const [collaboratorModal, setCollaboratorModal] = useState(false);
    const [leadCreateModal, setleadCreateModal] = useState(false);
    const [leadViewModal, setleadViewModal] = useState(false);
    const [leadToQueryModal, setleadToQueryModal] = useState(false);
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <LeadsTable
                isRtl={isRtl}
                setStatusModal={setStatusModal}
                setScoreModal={setScoreModal}
                setCampaignModal={setCampaignModal}
                setCollaboratorModal={setCollaboratorModal}
                setleadCreateModal={setleadCreateModal}
                setleadViewModal={setleadViewModal}
                setleadToQueryModal={setleadToQueryModal}
            />

            {/* Lead Status Modal */}
            <Transition appear show={statusModal} as={Fragment}>
                <Dialog as="div" open={statusModal} onClose={() => setStatusModal(false)}>
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
                                <LeadStatusModal
                                    setStatusModal={setStatusModal}
                                />
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Lead Score Modal */}
            <Transition appear show={scoreModal} as={Fragment}>
                <Dialog as="div" open={scoreModal} onClose={() => setScoreModal(false)}>
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
                                <LeadScoreModal
                                    setScoreModal={setScoreModal}
                                />
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Lead Campaign Modal */}
            <Transition appear show={campaignModal} as={Fragment}>
                <Dialog as="div" open={campaignModal} onClose={() => setCampaignModal(false)}>
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
                                <LeadCampaignModal
                                    setCampaignModal={setCampaignModal}
                                />
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Lead Collaborator Modal */}
            <Transition appear show={collaboratorModal} as={Fragment}>
                <Dialog as="div" open={collaboratorModal} onClose={() => setCollaboratorModal(false)}>
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
                                <LeadCollaboratorModal
                                    setCollaboratorModal={setCollaboratorModal}
                                />
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Lead Create Modal */}
            <Transition appear show={leadCreateModal} as={Fragment}>
                <Dialog as="div" open={leadCreateModal} onClose={() => setleadCreateModal(false)}>
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
                                    <LeadCreateModal
                                        setleadCreateModal={setleadCreateModal}
                                    />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Lead View Modal */}
            <Transition appear show={leadViewModal} as={Fragment}>
                <Dialog as="div" open={leadViewModal} onClose={() => setleadViewModal(false)}>
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
                                    <LeadViewModal
                                        setleadViewModal={setleadViewModal}
                                    />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* Proceed to Query Modal */}
            <Transition appear show={leadToQueryModal} as={Fragment}>
                <Dialog as="div" open={leadToQueryModal} onClose={() => setleadToQueryModal(false)}>
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
                                    <LeadToQueryModal
                                        isRtl={isRtl}
                                        activeTab={activeTab}
                                        setActiveTab={setActiveTab}
                                    />
                                </div>
                                <div className="sticky bottom-0 left-0 w-full z-10 bg-white dark:bg-gray-800 px-6">
                                    <div className="flex justify-end gap-2 py-3">
                                        <button
                                            type="button"
                                            className={`btn btn-primary ${activeTab === 1 ? 'hidden' : ''}`}
                                            onClick={() =>
                                                setActiveTab(activeTab === 5 ? 4 : activeTab === 4 ? 3 : activeTab === 3 ? 2 : 1)
                                            }
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() =>
                                                setActiveTab(activeTab === 1 ? 2 : activeTab === 2 ? 3 : activeTab === 3 ? 4 : 5)
                                            }
                                        >
                                            Next
                                        </button>
                                        <button
                                            onClick={() => setleadToQueryModal(false)}
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
        </>
    )
}

export default ManualLeads;
