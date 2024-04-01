import React, { useState, useEffect } from "react";
import PaginationList from "./PaginationList";
import SelectLengthList from "./SelectLengthList";
import Tags from "./Tags/Tags";

const TagsList = ({ paginationLength, list }) => {
    const [maxLengthList, setMaxLengthList] = useState(5)
    const [page, setPage] = useState(0)
    const optionsLength = [5, '10', 20, 30]

    useEffect(() => {
        setPage(0)
    }, [maxLengthList])

    return (
        <>
            <div>
                <SelectLengthList maxLengthList={(modulo) => setMaxLengthList(modulo)} options={optionsLength}/>

                <Tags tagsList={list} rowsPerPage={maxLengthList} page={page}/>
                
                <PaginationList 
                    page={page}
                    paginationLength={Math.ceil(paginationLength / maxLengthList)} 
                    changePage={modulo => setPage(modulo)} />
            </div>
        </>
    )
}

export default TagsList