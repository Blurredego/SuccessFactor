import React from 'react';
import { DataTable } from 'mantine-datatable';

const LeadAppointment = ({ formatDate, rowData2 }) => {
    return (
        <>
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
        </>
    )
}

export default LeadAppointment;