import React from 'react';
import {TableRow} from './TableRow';

export default function TableRowContainer({item}) {
    const isChild = !!item.child;

    return (
        <>
            <TableRow item={item} />
            {
                isChild && !!item.child ? item.child.map((child, index) => {
                    return <TableRow key={index} item={child} isChild={isChild} />
                }) : null
            }
        </>

    )
}
