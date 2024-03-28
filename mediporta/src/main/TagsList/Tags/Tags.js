import React from "react";
import TagsTableBody from "./TagsTableBody";
import TagsTableHead from "./TagsTableHead";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const Tags = ({ list, rowsPerPage, page }) => {
    
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" size="large">
                    <TagsTableHead />
                    
                    <TagsTableBody 
                        page={page} 
                        rowsPerPage={rowsPerPage} 
                        list={list}/>
                </Table>
            </TableContainer>
        </>
    )
}


export default Tags
