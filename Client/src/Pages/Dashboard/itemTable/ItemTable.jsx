import React from 'react'
import { Table } from '../../../component/export'
import { useDashContext } from '../../../Hooks/ContextDashboard'
import { useState } from 'react'
import { MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ItemTable() {
    const columns = [
        {
            header: 'code',
            accessorKey: 'code',
            footer: 'code'
        },
        {
            header: 'itemName',
            accessorKey: 'itemName',
            footer: 'itemName'
        },
        {
            header: 'unit',
            accessorKey: 'unit',
            footer: 'unit'
        },
        {
            header: 'category',
            accessorKey: 'category',
            footer: 'category'
        },
        {
            header: 'quantity',
            accessorKey: 'quantity',
            footer: 'quantity'
        },
        {
            header: 'Update',
            cell: ({ row }) => {
                return (
                    <Link to={`/dashboard/item-master?id=${row.original._id}`}><MdEdit /></Link>
                )
            }
        }
    ]
    const data = useDashContext()
    // console.log('data', data)
    const [pageNo, SetPageNo] = useState(1)
    const extra = {
        pageNo,
        SetPageNo,
        heading: 'item Table'
    }
    return (
        <Table data={data?.Data.items || []} columns={columns} extra={extra} />
    )
}

export default ItemTable
