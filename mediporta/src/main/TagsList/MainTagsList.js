import React from "react";
import getTags from "../../API/getTags";
import { useEffect, useState } from "react";
import Progres from "./Progres";
import TagsList from "./TagsList";
import AlertView from "./AlertView";

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
            { !dataTags 
            ? <Progres /> 
            : <>
                { dataTags.data.error_message 
                ? <AlertView error_message={dataTags.data.error_message}/>
                : <TagsList 
                    paginationLength={dataTags.data.items.length}
                    list={dataTags.data.items}/>}
                </>}
        </>
    )
}

export default MainTagsList