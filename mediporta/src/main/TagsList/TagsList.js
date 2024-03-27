import React from "react";
import PaginationList from "./PaginationList";
import getTags from "../../API/getTags";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const TagsList = () => {
    const [dataTags, setDataTags] = useState(false)

    useEffect(() => {
        console.log('komponent zamontowany');
        const fetchData = async () => {
            const data = await getTags();
            console.log(data)
            setDataTags(data)
        }

        fetchData()
    }, [])
    
    return (
        <>
            { !dataTags ?
            <Box sx={{ display:'flex'}}>
                <CircularProgress color="primary" />
            </Box>
            :

            <div>
                <h1>TagsList</h1>
                <PaginationList paginationLength={dataTags ? dataTags.items.length : 1} />
            </div>}
        </>
    )
}

export default TagsList