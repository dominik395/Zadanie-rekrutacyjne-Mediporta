import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Template from "./Template";
import Home from "./Home";

const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <Template>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes> 
                </Template>
            </BrowserRouter>
        </>
    )
}

export default Navigation