import React, { useEffect, useState } from "react";

import styles from "./productsPage.module.scss";

import FilterSection from "../../components/FilterSection/FilterSection";
import Products from "../../components/Products/Products";
import PriceFilter from "./PriceFilter/PriceFilter";


const ProductsPage = () => {
  const [maxAndMin, setMaxAndMin] = useState({});
  const [brends, setBrends] = useState([]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  async function getProductByPriceRange(min, max) {
    setMaxAndMin({ max, min });
  }



  return (
    <>
      <div className="container">
        <div className={styles.productsPage}>
          <div className={styles.productsFilter}>
            <FilterSection setBrends={setBrends} brends={brends}></FilterSection>
            <PriceFilter getProductByPriceRange={getProductByPriceRange}></PriceFilter>
          </div>
          <div className={styles.products}>
            <Products brends={brends} maxAndMin={maxAndMin}></Products>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
