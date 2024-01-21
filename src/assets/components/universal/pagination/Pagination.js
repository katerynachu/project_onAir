import React from 'react';
const Pagination = ({ paginate, totalPages, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages/10; i++) {
        pageNumbers.push(i);
    }
  

    console.log(pageNumbers);

    return (
        <div className='pagination'>
            <ul className="heading">
                      <li id='pagi-item' className='text-muted'>{`${pageNumbers}`}</li>
                {/* <li className='text-muted'>{`${pageNumbers}`}</li> */}
            </ul>
            <button onClick={() => paginate(currentPage - 1)} className='btn' disabled={currentPage === 1}>
                <span aria-hidden="true">&laquo;</span>
            </button>
            <button onClick={() => paginate(currentPage + 1)} className='btn' disabled={currentPage === totalPages}>
                <span aria-hidden="true">&raquo;</span>
            </button>
        </div>
    );
};

export default Pagination;

