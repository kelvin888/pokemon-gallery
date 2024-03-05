import React from "react"
import ReactPaginate from "react-paginate"
import { ChevronLeft, ChevronRight } from "lucide-react"

import "./pagination.css"

export type PaginationType = {
  currentPage: number
  pageSize: number
  totalPages: number
  totalElements: number
  handlePageChange: (page: { selected: number }) => void
}

export const Pagination: React.FC<{
  pagination: PaginationType
  showOnSmallScreen?: boolean
}> = ({ showOnSmallScreen = false, pagination }) => {
  const { currentPage, totalPages, handlePageChange } = pagination
  return (
    <div className="... flex justify-end">
      <div className={`${showOnSmallScreen ? "block" : "md:block"}`}>
        <ReactPaginate
          forcePage={currentPage}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName="paginate"
          previousLabel={<ChevronLeft className="text-gray-20/80" />}
          nextLabel={<ChevronRight className="text-gray-20/80" />}
          disabledClassName={"paginate__link--disabled"}
          activeClassName={"paginate__link--active"}
          nextLinkClassName="bg-none"
          previousLinkClassName="bg-none"
        />
      </div>
    </div>
  )
}
