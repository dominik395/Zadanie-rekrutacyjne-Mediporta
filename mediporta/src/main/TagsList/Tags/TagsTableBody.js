import React from "react";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const TagsTableBody = ({ page, rowsPerPage, tagsList }) => {
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tagsList.length) : 0;

    return (
        <>
            <TableBody>
                {(rowsPerPage > 0
                    ? tagsList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : tagsList
                ).map((row) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="left">{row.count}</TableCell>
                    </TableRow>
                ))}
                {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                    </TableRow>
                )}
            </TableBody>
        </>
    )
}

export default TagsTableBody