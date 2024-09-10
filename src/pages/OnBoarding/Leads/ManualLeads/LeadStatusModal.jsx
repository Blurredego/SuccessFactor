import React from 'react';
import Select from 'react-select';
import { StatusOptions } from '../../../../Data Resources/StatusOptions';

const LeadStatusModal = ({ setStatusModal }) => {

    return (
        <>
            <div className="flex items-center justify-between bg-[#fbfbfb] px-5 pt-6 dark:bg-[#121c2c]">
                <h5 className="text-xl font-bold">Lead Status</h5>
            </div>
            <div className="px-5 pt-4 pb-5">
                <div className="mb-4">
                    <Select
                        placeholder="Lead Status"
                        options={StatusOptions}
                    />
                </div>
                <div className="mt-8 flex items-center justify-end">
                    <button onClick={() => setStatusModal(false)} type="button" className="btn btn-outline-danger">
                        Discard
                    </button>
                    <button onClick={() => setStatusModal(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                        Save
                    </button>
                </div>
            </div>
        </>
    )
}

export default LeadStatusModal;
