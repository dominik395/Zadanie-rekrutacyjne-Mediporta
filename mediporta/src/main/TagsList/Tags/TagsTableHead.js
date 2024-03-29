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

                    <TableCell sortDirection={orderBy === 'polubienia' ? order : false} style={{ width: '80px'}}>
                        <TableSortLabel 
                            active={orderBy === 'polubienia'}
                            direction={orderBy === 'polubienia' ? order : 'asc'}
                            onClick={createSortHandler('polubienia')}
                        >
                            Polubienia
                        </TableSortLabel>
                    </TableCell>
                </TableRow>
            </TableHead>
        </>
    )
}

export default TagsTableHead
