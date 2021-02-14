import React from 'react';
import './Pagination.css'


export default function BasicPagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const arr = pageNumbers.map(number => {
        return<button key={number} onClick={() => paginate(number)}>
                {number}
             </button>
    })


    return (
    <div className="pagination">
        {arr}
    </div>
  );
}