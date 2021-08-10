import React from 'react'

const NextPage = ({postsPerPage, totalPosts, nextpage}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++ ){
        pageNumbers.push(i);
    }
    return (
        <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true" >«</span>
            </a>
          </li>
          {pageNumbers.map(number => 
          <li key={number} className="page-item">
              <a className="page-link" href="#" onClick={() => nextpage(number)}>{number}</a>
          </li>
          )}
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    )
}

export default NextPage
