import React, { useState, useEffect } from "react";

import styles from "./basketCard.module.scss";
import { useDispatch } from 'react-redux';
import { removeFromBasketAsync, updateBasketAsync } from '../../redux/actions/basketAction';
import {Link} from 'react-router-dom';


const BasketCard = ({ basketProduct }) => {
  const { quantity, variants, price, _id, photo, name,productId } = basketProduct;
  const [mark, setMark] = useState(true);
  const [firstRender, setFirstRender] = useState(true);
  const [productCount, setProductCount] = useState(quantity);
  const [productVariants, setProductVariants] = useState({});
  const dispatch = useDispatch();

  async function removeProductFromBasket() {
    dispatch(removeFromBasketAsync(_id));
  }

  async function changeQuantity() {
    if (productCount === 0) dispatch(removeFromBasketAsync(_id));
    else {
      dispatch(updateBasketAsync({ _id, productCount }));
    }
  }


  useEffect(() => {
    const variantObj = {};
    variants.forEach(el => {
      let name = el.name;
      let value = el.value;
      variantObj[name] = value;
    })
    setProductVariants(variantObj);
  }, []);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    };
    changeQuantity();
  }, [productCount]);

  const increase = () => {
    setProductCount(productCount + 1);

  };
  const decrease = () => {
    setProductCount(productCount >= 1 ? productCount - 1 : productCount);
  };

  return (
    <div className={styles.card}>
      <div
        className={`${styles.checkMark} ${mark && styles.marked}`}
        onClick={() => setMark(!mark)}
      ></div>
      <Link className={styles.productImg} to={`/productContent/${productId}`}>
        <img src={photo} alt="" />
        </Link>
      <div className={styles.productContent}>
        <h3 className={styles.productName}>
          {name}, {productVariants.size && `${productVariants.size}, `} {productVariants.color}
        </h3>
        <p className={styles.productColor}>
          <span>Rəng:</span>
          {productVariants?.color}
        </p>
        <div className={styles.productPrice}>
          {/* <del>3012 ₼</del> */}
          <span>{price} ₼</span>
        </div>
      </div>
      <div className={styles.productPrice}>
        {/* <del>3012 ₼</del> */}
        <span>{price} ₼</span>
      </div>
      <div className={styles.productCounter}>
        <span onClick={() => decrease()}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.799805 5H9.1998"
              stroke="#4F4F4F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p>{productCount}</p>
        <span onClick={() => increase()}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 0.799995V9.2"
              stroke="#4F4F4F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.799805 4.99999H9.1998"
              stroke="#4F4F4F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <svg
        onClick={removeProductFromBasket}
        className={styles.deleteProduct}
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.900391 4.54541H2.70039H17.1004"
          stroke="#828282"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.39922 4.54542V2.72724C5.39922 2.24503 5.58886 1.78257 5.92643 1.44159C6.26399 1.10062 6.72183 0.909058 7.19922 0.909058H10.7992C11.2766 0.909058 11.7344 1.10062 12.072 1.44159C12.4096 1.78257 12.5992 2.24503 12.5992 2.72724V4.54542M15.2992 4.54542V17.2727C15.2992 17.7549 15.1096 18.2174 14.772 18.5583C14.4344 18.8993 13.9766 19.0909 13.4992 19.0909H4.49922C4.02183 19.0909 3.56399 18.8993 3.22643 18.5583C2.88886 18.2174 2.69922 17.7549 2.69922 17.2727V4.54542H15.2992Z"
          stroke="#828282"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.19922 9.09094V14.5455"
          stroke="#828282"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.8008 9.09094V14.5455"
          stroke="#828282"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default BasketCard;
