import React, { useState, useEffect } from "react";

import styles from "./products.module.scss";

import Pagination from './Pagination/Pagination';

import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from '../../api/index';


const Products = ({ maxAndMin,brends }) => {
  const [showSorting, setShowSorting] = useState(false);
  const [showFiltering, setShowFiltering] = useState(false);
  const [products, setProducts] = useState([]);
  const [countOfProducts, setCountOfProducts] = useState(0);
  const [category, setCategory] = useState({});
  const navigate = useNavigate();
  const [sortText, setSortText] = useState("-createdAt");
  let { categoryName, page } = useParams();


  function changePage(pageNumber) {
    navigate(`/products/${categoryName}/${pageNumber}`);
  }

  const getCategory = async () => {
    const categoryBySlug = await axios.get(`/categories?slug=${categoryName}`);
    setCategory(categoryBySlug?.data?.data?.categories && categoryBySlug?.data?.data?.categories[0]);
  };


  const getProductsByCategory = async () => {
    let query=`/products?category=${category?._id}&page=${+page}&sort=${sortText}&price[gte]=${maxAndMin?.min}&price[lte]=${maxAndMin?.max}`;
   if(brends.length!==0){
    brends.forEach(brend => {
      query+=`&brend=${brend}`;
    });
   }
    const response = await axios.get(query);
    setProducts(response.data.data.products);
    setCountOfProducts(response.data.quantity);

  }

  function sortProducts(e) {
    setSortText(e.target.value);
    changePage(1);
  }


  useEffect(() => {
    getProductsByCategory();
    changePage(1);
  }, [brends]);

  useEffect(() => {
    getProductsByCategory();
    changePage(1);
  }, [maxAndMin]);

  useEffect(() => {
    getProductsByCategory();
  }, [category, sortText]);


  useEffect(() => {
    window.scrollTo(0, 0);
    getCategory();
  }, [page, categoryName]);


  return (
    <>
      <div className={styles.productsSettings}>
        <div
          className={styles.settingBox}
          onClick={() => setShowSorting(!showSorting)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.00038 6.99998L8.00038 20C8.00038 20.552 7.55338 21 7.00038 21C6.44738 21 6.00038 20.552 6.00038 20L6.00038 6.91798L4.79038 8.47598C4.45138 8.91198 3.82238 8.99098 3.38738 8.65198C2.95038 8.31298 2.87138 7.68398 3.21038 7.24898L6.21038 3.38698C6.40138 3.13998 6.69638 2.99798 7.00938 2.99998C7.32038 3.00198 7.61338 3.14998 7.80038 3.39998L10.8004 7.39998C10.9354 7.57998 11.0004 7.79098 11.0004 7.99898C11.0004 8.30298 10.8624 8.60398 10.6004 8.79998C10.1584 9.13098 9.53138 9.04198 9.20038 8.59998L8.00038 6.99998ZM15.0004 17L15.0004 3.99998C15.0004 3.44798 15.4474 2.99998 16.0004 2.99998C16.5534 2.99998 17.0004 3.44798 17.0004 3.99998L17.0004 17.082L18.2104 15.524C18.5494 15.088 19.1784 15.009 19.6134 15.348C19.8674 15.545 20.0004 15.84 20.0004 16.138C20.0004 16.353 19.9324 16.569 19.7904 16.751L16.7904 20.613C16.5994 20.86 16.3044 21.002 15.9914 21C15.6804 20.998 15.3874 20.85 15.2004 20.6L12.2004 16.6C11.8694 16.157 11.9584 15.531 12.4004 15.2C12.8424 14.869 13.4694 14.958 13.8004 15.4L15.0004 17Z"
              fill="#303030"
            />
          </svg>
          Sıralama
        </div>
        <span className={styles.lineY}></span>
        <div
          className={styles.settingBox}
          onClick={() => setShowFiltering(!showFiltering)}
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.67006 1.02562H18.4087C18.5941 1.09065 18.7622 1.19727 18.9001 1.3373C19.0379 1.47733 19.1419 1.64705 19.2041 1.83348C19.2662 2.0199 19.2848 2.21808 19.2586 2.41282C19.2323 2.60756 19.1618 2.79371 19.0525 2.957L12.6145 10.0387V19.0518L7.46419 15.1891V10.0387L1.02626 2.957C0.916936 2.79371 0.846434 2.60756 0.820157 2.41282C0.793881 2.21808 0.812527 2.0199 0.874668 1.83348C0.93681 1.64705 1.0408 1.47733 1.17866 1.3373C1.31653 1.19727 1.48462 1.09065 1.67006 1.02562Z"
              stroke="#303030"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Filterləmələr
        </div>
      </div>
      <div className={styles.productsTop}>
        <p className={styles.productsCount}>{countOfProducts} məhsul tapıldı</p>
        <select
          className={`${styles.mySelectMenu}  ${showSorting && styles.active}`}
          onChange={sortProducts}
        >
          <option value="price">Ucuzdan bahaya</option>
          <option value="-price">Bahadan ucuza</option>
        </select>
      </div>
      <div className={styles.products}>
        {
          products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
      </div>
      {countOfProducts > 6 && <Pagination changePage={changePage} amount={Math.ceil(countOfProducts / 6)} />}

    </>
  );
};

export default Products;
