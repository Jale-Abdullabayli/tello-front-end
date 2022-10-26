import React from "react";

import styles from "./productCard.module.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link className={styles.card} to={`/productContent/${product._id}`}>
      <div className="container">
        <div className={styles.productImg}>
          <img src={product.imageCover} alt="productImg" />
        </div>
        <div className={styles.productInfo}>
          <h5>{product.name}</h5>
          <div className="productPrice">
            {/* <del>{product.price} ₼</del> */}
            <span>{product.price} ₼</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
