import React from "react"

type Pagination = {
  currentPage: number
  pageSize: number
  totalPages: number
  totalElements: number
  handlePageChange: (page: { selected: number }) => void
}

type PaginationProps = Pick<
  Pagination,
  "currentPage" | "pageSize" | "totalPages" | "totalElements"
>
type Props = {
  pagination: PaginationProps
}

const PaginationInfo: React.FC<Props> = (props) => {
  const { currentPage, pageSize, totalPages, totalElements } = props.pagination
  const computeToPageNumber = () => {
    if (currentPage === totalPages - 1) {
      return totalElements
    } else {
      return (currentPage + 1) * pageSize
    }
  }
  return (
    <div data-cy="pagination-information">
      Showing {currentPage * pageSize + 1} to &nbsp;
      {computeToPageNumber()} &nbsp; of &nbsp;
      {totalElements} results
    </div>
  )
}

export default PaginationInfo
