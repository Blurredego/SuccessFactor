import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import { Dialog, Transition } from '@headlessui/react';
import IconCopy from '../../components/Icon/IconCopy';
import CopyToClipboard from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';

const Cards = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Google Forms'));
    });

    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);

    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const showMessage = (message) => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: 'success',
            title: message || 'Copied successfully.',
            padding: '10px 20px',
        });
    };

    return (
        <div>
            <div className="panel">
                <div className="flex items-center justify-end gap-2 mb-5">
                    <input type="text" className="form-input w-auto" placeholder="Search..." />
                    <button type="button" className="btn btn-primary" onClick={() => setModal3(true)}>
                        Add Google Form
                    </button>
                    <button type="button" className="btn btn-primary" onClick={() => setModal4(true)}>
                        ?
                    </button>
                </div>
                <div className="mb-5 grid lg:grid-cols-2">
                    <div className="max-w-[30rem] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                        <div className="p-5 flex items-center flex-col sm:flex-row">
                            <div className="flex-1 ltr:sm:pl-5 rtl:sm:pr-5 text-center sm:text-left">
                                <div className='flex justify-between'>
                                    <h5 className="text-[#3b3f5c] text-2xl font-semibold mb-2 dark:text-white-light">Voluptas Sapiente Fu</h5>
                                    <p className="mt-2 text-md text-white-dark">23-08-2024</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p className="mb-2 text-white-dark">Manager</p>
                                    <p className=" text-white-dark">Active</p>
                                </div>

                                <span className="badge bg-primary rounded-full">4.5</span>
                                <p className="font-semibold text-white-dark mt-3 sm:mt-8">
                                    Maecenas nec mi vel lacus condimentum rhoncus dignissim egestas orci. Integer blandit porta placerat. Vestibulum in ultricies.
                                </p>
                                <div className='flex justify-end mt-3'>
                                    <button type="button" className="btn btn-primary">
                                        View
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Form Create Modal */}
            <Transition appear show={modal3} as={Fragment}>
                <Dialog as="div" open={modal3} onClose={() => setModal3(false)}>
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
                                <Dialog.Panel as="div" className={`panel my-8 w-full max-w-xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark px-6 animate__animated ${isRtl ? 'animate__fadeInRight' : 'animate__fadeInLeft'}`}>
                                    <div className="flex items-center justify-between bg-[#fbfbfb] px-5 pt-8 dark:bg-[#121c2c]">
                                        <h5 className="text-xl font-bold">New Google Form</h5>
                                    </div>
                                    <div className="px-5 pt-4 pb-5">
                                        <div className="lg:col-span-2">
                                            <div className="mb-5">
                                                <form>
                                                    <input type="text" placeholder="Form Title" className="form-input h-14 mb-4" />
                                                    <textarea rows={4} className="form-textarea mb-3" placeholder='Form Description'>
                                                    </textarea>
                                                    <input type="text" placeholder="Form ID" className="form-input h-14 " />
                                                    <div className="mt-4 flex items-center justify-end">
                                                        <button onClick={() => setModal3(false)} type="button" className="btn btn-outline-danger">
                                                            Discard
                                                        </button>
                                                        <button onClick={() => setModal3(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                            Save
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* SF Form Modal */}
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
                                <Dialog.Panel as="div" className={`panel my-8 w-full max-w-xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark px-6 animate__animated ${isRtl ? 'animate__fadeInRight' : 'animate__fadeInLeft'}`}>
                                    <div className="p-5">
                                        <form>
                                            <input type="text" value={'google-form@successfactorapp.iam.gserviceaccount.com'} className="form-input h-14" />
                                            <div className="mt-3">
                                                <CopyToClipboard
                                                    text={'google-form@successfactorapp.iam.gserviceaccount.com'}
                                                    onCopy={(text, result) => {
                                                        if (result) {
                                                            showMessage();
                                                        }
                                                    }}
                                                >
                                                    <button type="button" className="btn btn-primary">
                                                        <IconCopy className="ltr:mr-2 rtl:ml-2" />
                                                        Copy from Input
                                                    </button>
                                                </CopyToClipboard>
                                            </div>
                                        </form>
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

export default Cards;
