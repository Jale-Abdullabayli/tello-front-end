import React, { useEffect, useState } from 'react';
import './Pagination.scss';
import paginationPrevIcon from '../../../assets/images/paginationPrevIcon.svg';
import paginationNextIcon from '../../../assets/images/paginationNextIcon.svg';
import { useParams } from 'react-router-dom';

function Pagination({ amount, changePage }) {
    let { categoryName, page } = useParams();
    let pageNumber = Number(page);
    const numbersArr = [];
    for (let i = 0; i < amount; i++) {
        numbersArr.push(i);
    }
    function changeNumber(el) {
        changePage(el + 1);
    }
    function changeNumberPrev() {
        if (pageNumber === 1) return;
        else changePage(pageNumber - 1);
    }

    function changeNumberNext() {
        if (pageNumber === amount) return;
        else changePage(pageNumber + 1);
    }
    return (
        <div className='pagination'>
            <div className="arrow" onClick={changeNumberPrev}>
                <img src={paginationPrevIcon} alt='paginationPrevIcon' />

            </div>
            <div className="pages">
                {
                    numbersArr.map((el) => (
                        <span key={el} onClick={() => changeNumber(el)} className={`${pageNumber === el + 1 ? 'active' : ''}`}>{el + 1}</span>
                    ))
                }
            </div>
            <div className="arrow" onClick={changeNumberNext}>
                <img src={paginationNextIcon} alt='paginationNextIcon' />
            </div>
        </div>
    )
}

export default Pagination