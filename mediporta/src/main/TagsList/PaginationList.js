import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationList = ({ paginationLength }) => {
    const [page, setPage] = useState(1)
    const handleChange = (event, value) => {
        setPage(value);
      };

    return (
        <>
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination count={paginationLength} page={page} onChange={handleChange} size="large" color="primary" />
            </Stack>
        </>
    )
}

export default PaginationList