import React from "react";
import getTags from "../../API/getTags";
import { useEffect, useState } from "react";
import Progres from "./Progres";
import TagsList from "./TagsList";

const MainTagsList = () => {
    const [dataTags, setDataTags] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTags();
            setDataTags(data)
        }

        fetchData()
    }, [])
    
    return (
        <>
            { !dataTags ? <Progres /> : 
            <TagsList 
                paginationLength={dataTags.items.length} 
                dataItems={dataTags.items}
                list={dataTags.items}/>}
        </>
    )
}

export default MainTagsList