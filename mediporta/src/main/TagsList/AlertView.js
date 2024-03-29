import React from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const AlertView = ({ error_message }) => {
    return (
        <>
            <Alert severity="error" variant="filled">
                <AlertTitle>Error</AlertTitle>
                {error_message}
            </Alert>
        </>
    )
}

export default AlertView