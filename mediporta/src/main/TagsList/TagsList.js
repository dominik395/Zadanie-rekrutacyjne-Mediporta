import React, { useState } from "react";
import PaginationList from "./PaginationList";
import SelectLengthList from "./SelectLengthList";

const TagsList = ({ paginationLength }) => {
    const [maxLengthList, setMaxLengthList] = useState(10)

    return (
        <>
            <div>
                <SelectLengthList maxLengthList={(modulo) => setMaxLengthList(modulo)}/>
                <h1>TagsList maxLengthList: {maxLengthList}</h1>
                <PaginationList paginationLength={Math.ceil(paginationLength / maxLengthList)} />
            </div>
        </>
    )
}

export default TagsList