import React from "react";

import ProductCard from "../ProductCard/ProductCard";
import { Link } from 'react-router-dom'
import arrow from '../../assets/images/arrow.png';

import styles from "./cardsSlider.module.scss";

const CardsSlider = ({products,title,permalink}) => {
  return (
    <div className="container">
      <div className={styles.sliderInfo}>
        <h3>{title}</h3>
        <p>
        <Link to={`/products/${permalink ? permalink : 'telefonlar'}/1`}><span>Hamısına bax</span> <img src={arrow} alt="all" /></Link>
        </p>
      </div>
      <div className={styles.cardsSlider}>
        {products?.map(product=><ProductCard key={product._id} product={product}/>)}
      </div>
    </div>
  );
};

export default CardsSlider;
