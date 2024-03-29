import React from "react";
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

const TagsTableHead = ({ order, orderBy, onRequestSort }) => {
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <>
            <TableHead>
                <TableRow>
                    <TableCell sortDirection={orderBy === 'tagi' ? order : false} style={{ width: '80px'}}>
                        <TableSortLabel 
                            active={orderBy === 'tagi'}
                            direction={orderBy === 'tagi' ? order : 'asc'}
                            onClick={createSortHandler('tagi')}
                        >
                            Tagi
                        </TableSortLabel>
                    </TableCell>

                    <TableCell sortDirection={orderBy === 'powiazanePosty' ? order : false} style={{ width: '80px'}}>
                        <TableSortLabel 
                            active={orderBy === 'powiazanePosty'}
                            direction={orderBy === 'powiazanePosty' ? order : 'asc'}
                            onClick={createSortHandler('powiazanePosty')}
                        >
                            Powiązane posty
                        </TableSortLabel>
                    </TableCell>
                </TableRow>
            </TableHead>
        </>
    )
}

export default TagsTableHead
