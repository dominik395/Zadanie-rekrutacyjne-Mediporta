import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Progres = () => {
    return (
        <>
            <Box sx={{ display:'flex'}}>
                <CircularProgress color="primary" />
            </Box>
        </>
    )
}

export default Progres