import React, { useState } from "react";
import TagsTableBody from "./TagsTableBody";
import TagsTableHead from "./TagsTableHead";
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

const Tags = ({ tagsList, rowsPerPage, page }) => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [sortedTagsList, setSortedTagsList] = useState(tagsList);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        const newOrder = isAsc ? 'desc' : 'asc';
        setOrder(newOrder);
        setOrderBy(property);
        
        const sortedData = tagsList.slice().sort((a, b) => {
            let propA, propB;
            if (property === 'tagi') {
                propA = a.name;
                propB = b.name;
            } else if (property === 'polubienia') {
                propA = a.count;
                propB = b.count;
            }
            
            if (propA === propB) {
                return 0;
            }
        
            if (newOrder === 'asc') {
                return propA > propB ? 1 : -1;
            } else {
                return propA < propB ? 1 : -1;
            }
        });
        
        setSortedTagsList(sortedData);
    };
      
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" size="large">
                    <TagsTableHead 
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}/>
                    <TagsTableBody 
                        page={page} 
                        rowsPerPage={rowsPerPage} 
                        tagsList={sortedTagsList}/>
                </Table>
            </TableContainer>
        </>
    )
}


export default Tags
