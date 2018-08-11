import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const MainPagination = ({ totalCount, pageSize, currentPage, onCurrentPageChange }) => {
    
    const pagesCount = Math.ceil(totalCount / pageSize);

    return (
        <Pagination size="sm" className="pagination justify-content-center">
            <PaginationItem disabled={currentPage <= 0}>
                <PaginationLink
                  onClick={e => onCurrentPageChange(currentPage - 1)}
                  previous
                  href="#"
                />
            </PaginationItem>

            {[...Array(pagesCount)].map((page, i) => (
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink onClick={e => onCurrentPageChange(e, i)} href="#">
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem disabled={currentPage >= pagesCount - 1}>
              <PaginationLink
                onClick={e => onCurrentPageChange(e, currentPage + 1)}
                next
                href="#"
              />
            </PaginationItem>
        </Pagination>
    );
};

MainPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onCurrentPageChange: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired
};

export default MainPagination;


        

