import React from 'react'

const PaginationListaCharacters = ({ nextPage, prevoiousPage }) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item" role="button" onClick={prevoiousPage}><a className="page-link">Previous</a></li>
                <li className="page-item" role="button" onClick={nextPage}><a className="page-link">Next</a></li>
            </ul>
        </nav>
    );
}

export default PaginationListaCharacters;