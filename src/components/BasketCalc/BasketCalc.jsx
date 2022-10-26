import React, { useState } from "react";
import * as api from '../../api/checkout';

import styles from "./basketCalc.module.scss";
import { loadStripe } from '@stripe/stripe-js';
import ClipLoader from "react-spinners/ClipLoader";



const BasketCalc = ({ totalPrice, products }) => {

  const stripePromise = loadStripe('pk_test_51LvKwGJiy19SLciPOXlIBxXEEmixtoYJ3DeAeuJCkApj5smuCZpr3Uii83U5c9psXzH4xTkSXKQBD4QIuLzK8CY400VFbjnkOz');
  const [loading, setLoading] = useState(false);


  async function checkout() {

    try {
      setLoading(true);
      const basketProducts = products.map(product => {
        const name = `${product.name}, ${product.variants[1] && product.variants[1].value + ", "} ${product.variants[0].value}`
        return {
          id: product._id,
          name,
          price: product.price,
          quantity: product.quantity
        }
      });
      const { data } = await api.checkout(basketProducts);
      const stripe = await stripePromise;

      stripe.redirectToCheckout({ sessionId: data.session.id });
      setLoading(false);


    } catch (error) {
      setLoading(false);
    }
  }


  return (
    <div className={styles.calcBox}>
      <h4>Ümumi</h4>
      <div className={styles.calcRow}>
        <p>Məbləğ</p>
        <p>{totalPrice} ₼</p>
      </div>
      <div className={styles.calcRow}>
        <p>Çatdırılma</p>
        <p>0.00 ₼</p>
      </div>
      <div className={styles.calcRow}>
        <p>Hədiyyə paketi</p>
        <p>0.00 ₼</p>
      </div>
      <div className={styles.calcRow}>
        <p>Promo kod</p>
        <p>0.00 ₼</p>
      </div>
      <span className={styles.lineX}></span>
      <div className={styles.totalCalc}>
        <p>Cəmi</p>
        <span>{totalPrice} ₼</span>
      </div>

      <button onClick={checkout}><span className="btnText">Ödəniş et </span>  <div className="spinner">
        <ClipLoader color={'white'} loading={loading} size={20} />
      </div></button>
    </div>
  );
};

export default BasketCalc;
