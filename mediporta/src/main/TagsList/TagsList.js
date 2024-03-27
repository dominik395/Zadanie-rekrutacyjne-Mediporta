import React from "react";
import PaginationList from "./PaginationList";

const TagsList = ({ paginationLength }) => {
    return (
        <>
            <div>
                <h1>TagsList</h1>
                <PaginationList paginationLength={paginationLength} />
            </div>
        </>
    )
}

export default TagsList