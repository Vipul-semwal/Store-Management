import React, { useState } from 'react'
import { Table } from '../../../component/export'
import { useDashContext } from '../../../Hooks/ContextDashboard'
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

function PartieTable() {
    const columns = [
        {
            header: 'PartieCode',
            accessorKey: 'PartieCode',
            footer: 'PartieCode'
        },
        {
            header: 'Name',
            accessorKey: 'Name',
            footer: 'Name'
        },
        {
            header: 'type',
            accessorKey: 'type',
            footer: 'type'
        },
        {
            header: 'contactNo',
            accessorKey: 'contactNo',
            footer: 'contactNo'
        },
        {
            header: 'Address',
            accessorKey: 'Address',
            footer: 'Address'
        },
        {
            header: 'Update',
            cell: ({ row }) => {
                return (
                    <Link to={`/dashboard/add-partie?id=${row.original._id}`}><MdEdit /></Link>
                )
            }
        }
    ]
    const data = useDashContext()
    const [pageNo, SetPageNo] = useState(1)
    const extra = {
        pageNo,
        SetPageNo,
        heading: 'Parties Table'
    }
    return (

        <Table data={data?.Data.parties || []} columns={columns} extra={extra} />

    )
}

export default PartieTable
