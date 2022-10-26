import React, { useEffect, useState } from "react";

import styles from "./basket.module.scss";
import { ReactComponent as Empty } from "../../assets/icons/empty.svg";
import BasketCard from "../../components/BasketCard/BasketCard";
import BasketCalc from "../../components/BasketCalc/BasketCalc";
import { useDispatch, useSelector } from 'react-redux';
import { getBasketAsync, clearBasketAsync } from '../../redux/actions/basketAction';
import { Link } from 'react-router-dom';

const Basket = () => {
  const dispatch = useDispatch();

  const basket = useSelector(state => {
    return state.basketReducer.basket;
  });

  function clearBasket() {
    dispatch(clearBasketAsync());
}

  useEffect(() => {
    dispatch(getBasketAsync());
    window.scrollTo(0, 0);
  }, []);


  if (!basket || basket?.products?.length === 0) {
    return <div className={styles.emptyBasket}>
      <Empty />
      <p>Səbətiniz halhazırda boşdur</p>
      <Link to="/">Alış-verişə davam et</Link>
    </div>
  }
  return (
    <div className={styles.basketPage}>
      <div className="container">
        <h3>Səbət ({basket.totalCount} məhsul)</h3>

        <div className={styles.basket}>
          <div className={styles.basketCards}>
            {basket?.products?.map(basketProduct => <BasketCard key={basketProduct._id} basketProduct={basketProduct}></BasketCard>)}
            <div className={styles.clearBasket}>
              <button onClick={clearBasket}>Səbəti Təmizlə</button>
            </div>
          </div>
          <BasketCalc products={basket?.products} totalPrice={basket?.totalPrice}></BasketCalc>
        </div>

      </div>
    </div>
  );
};

export default Basket;
