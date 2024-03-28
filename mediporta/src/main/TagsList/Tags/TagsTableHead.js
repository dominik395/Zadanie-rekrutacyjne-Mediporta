import React from "react";
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TagsTableHead = () => {
    return (
        <>
            <TableHead>
                <TableRow>
                        <TableCell>Tagi</TableCell>
                        <TableCell align="left">Polubienia</TableCell>
                </TableRow>
            </TableHead>
        
        </>
    )
}

export default TagsTableHead