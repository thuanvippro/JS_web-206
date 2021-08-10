import React from 'react'

const NextPages = ({postsPerPage, temm, nextpages}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(temm/postsPerPage); i++ ){
        pageNumbers.push(i);
    }
    console.log()
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
              <a className="page-link" href="#" onClick={() => nextpages(number)}>{number}</a>
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

export default NextPages
