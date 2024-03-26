import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';

const Template = ({ children }) => {
    return (
        <>
            <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link
                    underline="hover"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color="inherit"
                    href="/"
                    >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    HOME
                    </Link>

                </Breadcrumbs>
            </div>

            <div>{children}</div>
        </>
    )
}

export default Template