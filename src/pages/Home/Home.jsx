import React, { useEffect, useState } from "react";

import styles from "./home.module.scss";

import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import CardsSlider from "../../components/CardsSlider/CardsSlider";
import { Link } from 'react-router-dom';

import addImg1 from "../../assets/images/AddImg1.png";
import addImg2 from "../../assets/images/AddImg2.png";
import categoryImg1 from "../../assets/images/categoryImg1.png";
import categoryImg2 from "../../assets/images/categoryImg2.png";
import categoryImg3 from "../../assets/images/categoryImg3.png";

import { useSelector, useDispatch } from "react-redux";
import { fetchProductsAsync } from '../../redux/actions/productAction';
import axios from '../../api/index';

const Home = () => {

  const products = useSelector(state => state.productReducer.products.slice(0, 4));
  const [accessories, setAccessories] = useState([]);
  const [phonesCategory, setPhonesCategory] = useState({});
  const [accessoriesCategory, setAccessoriesCategory] = useState({});
  const [smartWatchCategory, setSmartWatchCategory] = useState({});

  const dispatch = useDispatch()

  const getCategory = async (slug) => {
    const categoryBySlug = await axios.get(`/categories?slug=${slug}`);
    return categoryBySlug?.data?.data?.categories && categoryBySlug?.data?.data?.categories[0];
  };

  const getProductsByCategory = async () => {
    const category = await getCategory("aksesuarlar");
    const response = await axios.get(`/products?category=${category?._id}&limit=4`);
    setAccessories(response.data.data.products);
  }


  async function getSpecificCategories(){
    setPhonesCategory(await getCategory("telefonlar"));
    setAccessoriesCategory(await getCategory("aksesuarlar"));
    setSmartWatchCategory(await getCategory("smart-saat"));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProductsAsync());
    getProductsByCategory();
    getSpecificCategories();
  }, []);
  return (
    <>
      <ReviewSlider />
      <CardsSlider title='Ən çox satılan məhsullar' products={products} />
      <CardsSlider title='Yeni gələn məhsullar' products={products} />
      <div className="container">
        <div className={styles.addsBox}>
          <img src={addImg1} alt="" />
          <img src={addImg2} alt="" />
        </div>
      </div>
      <CardsSlider permalink='aksesuarlar' title='Yeni gələn aksessuarlar' products={accessories} />
      <div className="container">
        <div className={styles.categories}>
          <div className={styles.leftCat}>
            <div className={`${styles.category} ${styles.bigCat}`}>
              <div className={styles.firstSide}>
                <h3>{phonesCategory?.name}</h3>
                <p>Məhsul sayı: {phonesCategory?.countOfProducts}</p>
                <Link to={`/products/${phonesCategory.slug}/1`} style={{ color: "#3366FF" }}>
                  Hamısına bax
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.49976 10C1.24376 10 0.987762 9.902 0.792762 9.707C0.401762 9.316 0.401762 8.684 0.792762 8.293L4.09776 4.988L0.917762 1.695C0.534762 1.297 0.545762 0.664005 0.942762 0.281005C1.34076 -0.101995 1.97376 -0.0909952 2.35676 0.305005L6.21876 4.305C6.59776 4.698 6.59276 5.321 6.20676 5.70701L2.20676 9.707C2.01176 9.902 1.75576 10 1.49976 10Z"
                      fill="#3366FF"
                    />
                  </svg>
                </Link>
              </div>
              <div className={styles.secondSide}>
                <img src={phonesCategory.photo} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.rightCat}>
            <div className={`${styles.category} ${styles.smallCat}`}>
              <div className={styles.firstSide}>
              <h3>{accessoriesCategory?.name}</h3>
                <p>Məhsul sayı: {accessoriesCategory?.countOfProducts}</p>
                <Link to={`/products/${accessoriesCategory.slug}/1`} style={{ color: "#3366FF" }}>
                  Hamısına bax
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.49976 10C1.24376 10 0.987762 9.902 0.792762 9.707C0.401762 9.316 0.401762 8.684 0.792762 8.293L4.09776 4.988L0.917762 1.695C0.534762 1.297 0.545762 0.664005 0.942762 0.281005C1.34076 -0.101995 1.97376 -0.0909952 2.35676 0.305005L6.21876 4.305C6.59776 4.698 6.59276 5.321 6.20676 5.70701L2.20676 9.707C2.01176 9.902 1.75576 10 1.49976 10Z"
                      fill="#3366FF"
                    />
                  </svg>
                </Link>
              </div>
              <div className={styles.secondSide}>
                <img src={accessoriesCategory.photo} alt="" />
              </div>
            </div>
            <div className={`${styles.category} ${styles.smallCat}`}>
              <div className={styles.firstSide}>
              <h3>{smartWatchCategory?.name}</h3>
                <p>Məhsul sayı: {smartWatchCategory?.countOfProducts}</p>
                <Link to={`/products/${smartWatchCategory.slug}/1`} style={{ color: "#3366FF" }}>
                  Hamısına bax
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.49976 10C1.24376 10 0.987762 9.902 0.792762 9.707C0.401762 9.316 0.401762 8.684 0.792762 8.293L4.09776 4.988L0.917762 1.695C0.534762 1.297 0.545762 0.664005 0.942762 0.281005C1.34076 -0.101995 1.97376 -0.0909952 2.35676 0.305005L6.21876 4.305C6.59776 4.698 6.59276 5.321 6.20676 5.70701L2.20676 9.707C2.01176 9.902 1.75576 10 1.49976 10Z"
                      fill="#3366FF"
                    />
                  </svg>
                </Link>
              </div>
              <div className={styles.secondSide}>
                <img src={smartWatchCategory.photo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.services}>
          <div className={styles.serviceCard}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5667 24.7998L39.9999 41.8331L69.2332 24.8997"
                stroke="#2DD06E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M40 72.0332V41.7998"
                stroke="#2DD06E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.96667 30.5666C7.96667 25.9666 11.2666 20.3666 15.2999 18.1333L33.0999 8.2332C36.8999 6.1332 43.1332 6.1332 46.9332 8.2332L64.7333 18.1333C68.7667 20.3666 72.0666 25.9666 72.0666 30.5666V49.4C72.0666 54 68.7667 59.5999 64.7333 61.8333L46.9332 71.7334C43.1332 73.8334 36.8999 73.8334 33.0999 71.7334L15.2999 61.8333C11.2666 59.5999 7.96667 54 7.96667 49.4V46.6666"
                stroke="#2DD06E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M56.6666 44.1332V31.9333L36.4333 20.2333L32.9333 18.2332L25.0333 13.6665"
                stroke="#2DD06E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3>Çatdırılma</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
          </div>
          <div className={styles.serviceCard}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1 52.9334L52.9333 13.1001"
                stroke="#2DD06E"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M37 60.9334L41 56.9333"
                stroke="#2DD06E"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M45.9667 51.9667L53.9333 44"
                stroke="#2DD06E"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M68.1 28.2666C75.1 35.2666 75.0667 38.7999 68 45.8666L45.8667 67.9999C38.8 75.0666 35.2667 75.0999 28.2667 68.0999L11.9 51.7333C4.90005 44.7333 4.93338 41.1999 12 34.1333L34.1334 11.9999C41.2 4.93326 44.7334 4.89992 51.7334 11.8999L58.0667 18.2333"
                stroke="#2DD06E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66663 73.3333H73.3333"
                stroke="#2DD06E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3>Kredit</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
          </div>
          <div className={styles.serviceCard}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.1666 11.4668C59.7333 15.7334 63.3333 22.4334 63.3333 30.0001C63.3333 34.8334 61.9 39.2668 59.4333 42.9668C55.8333 48.3001 50.1333 52.0668 43.5 53.0334C42.3666 53.2334 41.2 53.3334 40 53.3334C38.8 53.3334 37.6333 53.2334 36.5 53.0334C29.8666 52.0668 24.1666 48.3001 20.5666 42.9668C18.1 39.2668 16.6666 34.8334 16.6666 30.0001C16.6666 17.1001 27.1 6.66675 40 6.66675"
                stroke="#2DD06E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M70.8333 61.5667L65.3333 62.8666C64.1 63.1666 63.1333 64.1 62.8666 65.3334L61.7 70.2334C61.0666 72.9 57.6666 73.7001 55.9 71.6001L40 53.3334L24.1 71.6333C22.3333 73.7333 18.9333 72.9333 18.3 70.2666L17.1333 65.3666C16.8333 64.1333 15.8666 63.1667 14.6666 62.9L9.16664 61.6001C6.63331 61.0001 5.73331 57.8333 7.56664 56L20.5666 43C24.1666 48.3333 29.8666 52.1001 36.5 53.0667C37.6333 53.2667 38.8 53.3667 40 53.3667C41.2 53.3667 42.3666 53.2667 43.5 53.0667C50.1333 52.1001 55.8333 48.3333 59.4333 43L72.4333 56C74.2666 57.8 73.3666 60.9667 70.8333 61.5667Z"
                stroke="#2DD06E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M41.9333 19.9333L43.9 23.8666C44.1667 24.3999 44.8667 24.9332 45.5 25.0332L49.0667 25.6332C51.3333 25.9999 51.8667 27.6666 50.2333 29.2999L47.4667 32.0665C47 32.5332 46.7333 33.4333 46.9 34.0999L47.7 37.5332C48.3333 40.2332 46.9 41.2999 44.5 39.8665L41.1667 37.8999C40.5667 37.5332 39.5667 37.5332 38.9667 37.8999L35.6333 39.8665C33.2333 41.2665 31.8 40.2332 32.4333 37.5332L33.2333 34.0999C33.3667 33.4666 33.1333 32.5332 32.6667 32.0665L29.9 29.2999C28.2667 27.6666 28.8 26.0332 31.0667 25.6332L34.6333 25.0332C35.2333 24.9332 35.9333 24.3999 36.2 23.8666L38.1667 19.9333C39.1333 17.7999 40.8667 17.7999 41.9333 19.9333Z"
                stroke="#2DD06E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3>Zəmanət</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
