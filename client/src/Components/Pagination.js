import React from 'react'
import { useHistory } from 'react-router-dom';
import { ButtonStyles } from '../Styles/PaginationStyles';

function Pagination({totalPosts, postsPerPage, setCurrentPage}) {

    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }
    

    return (
        <ButtonStyles>
            {pages.map((page, index) => <button onClick={() => setCurrentPage(page)} key={index}>{page}</button>)}
        </ButtonStyles>
    )
}

export default Pagination