import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationList = ({ page, paginationLength, changePage }) => {
    const handleChange = (event, value) => {
        changePage(value - 1)
      };

    return (
        <>
            <Stack spacing={2}>
                <Pagination 
                    count={paginationLength} 
                    page={page + 1} 
                    onChange={handleChange} 
                    size="large" 
                    color="primary" />
            </Stack>
        </>
    )
}

export default PaginationList