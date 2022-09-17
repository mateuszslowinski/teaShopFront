import React from "react";
import ReactPaginate from "react-paginate";
import {StyledPaginateContainer} from "./Pagination.styles";

interface Props {
    pageCount: number
    onChange: ({selected}: { selected: number }) => void
}

export const Pagination = ({pageCount, onChange}: Props) => (
    <StyledPaginateContainer>
        <ReactPaginate
            previousLabel={"Poprzednia"}
            nextLabel={"Następna"}
            pageCount={pageCount}
            onPageChange={onChange}
            containerClassName={"paginationBttns"}
            activeClassName={"paginationActive"}
        />
    </StyledPaginateContainer>
)