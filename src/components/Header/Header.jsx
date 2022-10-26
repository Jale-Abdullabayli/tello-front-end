import React, { useState, useRef, useEffect } from "react";
import styles from "./header.module.scss";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Favorite } from "../../assets/icons/fav.svg";
import { ReactComponent as User } from "../../assets/icons/user.svg";
import { Link } from "react-router-dom";
import axios from '../../api/index';
import { useDispatch, useSelector } from 'react-redux';
import { getBasketAsync } from '../../redux/actions/basketAction';


const Header = ({ setHamMenu }) => {

  const [products, setProducts] = useState([]);
  const resultRef = useRef(null);
  const [showResults, setShowResults] = useState(true);

  const dispatch = useDispatch();

  const authReducer = useSelector(state => state.authReducer)

  const basket = useSelector(state => {
    return state.basketReducer.basket;
  });
  let interval;

  async function searchProducts(value) {
    const response = await axios.get(`/products?search=${value}`);
    setProducts(response?.data?.data?.products);
  }


  async function keyUp(value) {
    clearInterval(interval);
    let counter = 0;
    value = value.trim();
    if (value === "") {
      setProducts([]);
      return;
    };
    interval = setInterval(() => {
      counter++;
      if (counter >= 1) {
        clearInterval(interval);
        searchProducts(value);
        setShowResults(true);

      }
    }, 500);
  };



  useEffect(() => {
    dispatch(getBasketAsync());
    window.scrollTo(0, 0);

    function handleClickOutside(event) {

      if (!resultRef.current?.contains(event.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

  }, []);

  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.logo_menu}>
          <svg
            className={styles.menuButton}
            onClick={() => {
              setHamMenu(true);
            }}
            width="21"
            height="14"
            viewBox="0 0 21 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3 13.6H0.8C0.4 13.6 0 13.2 0 12.8C0 12.4 0.3 12 0.8 12H19.3C19.7 12 20.1 12.3 20.1 12.8C20.1 13.3 19.7 13.6 19.3 13.6Z"
              fill="#1D2123"
            />
            <path
              d="M19.3 1.6H0.8C0.4 1.6 0 1.2 0 0.8C0 0.4 0.3 0 0.8 0H19.3C19.7 0 20 0.4 20 0.8C20 1.2 19.7 1.6 19.3 1.6Z"
              fill="#1D2123"
            />
            <path
              d="M19.3 7.6H0.8C0.4 7.6 0 7.2 0 6.8C0 6.4 0.3 6 0.8 6H19.3C19.7 6.1 20 6.4 20 6.8C20 7.2 19.7 7.6 19.3 7.6Z"
              fill="#1D2123"
            />
          </svg>
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={styles.search}>
          <div className={styles.searchBar}>
            <svg
              className={styles.searchIcon}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.66671 14.5C3.90004 14.5 0.833374 11.4333 0.833374 7.66668C0.833374 3.90001 3.90004 0.833344 7.66671 0.833344C11.4334 0.833344 14.5 3.90001 14.5 7.66668C14.5 11.4333 11.4334 14.5 7.66671 14.5ZM7.66671 1.83334C4.44671 1.83334 1.83337 4.45334 1.83337 7.66668C1.83337 10.88 4.44671 13.5 7.66671 13.5C10.8867 13.5 13.5 10.88 13.5 7.66668C13.5 4.45334 10.8867 1.83334 7.66671 1.83334Z"
                fill="#828282"
              />
              <path
                d="M14.6666 15.1667C14.54 15.1667 14.4133 15.12 14.3133 15.02L12.98 13.6867C12.7866 13.4933 12.7866 13.1733 12.98 12.98C13.1733 12.7867 13.4933 12.7867 13.6866 12.98L15.02 14.3133C15.2133 14.5067 15.2133 14.8267 15.02 15.02C14.92 15.12 14.7933 15.1667 14.6666 15.1667Z"
                fill="#828282"
              />
            </svg>
            <input type="text" placeholder="Search..." onKeyUp={(e) => keyUp(e.target.value)} />
          </div>
          <div ref={resultRef} className={styles.searchResults}>
            {
              showResults &&
              products?.map((product) => (
                <Link to={`/productContent/${product.id}`} className={styles.searchResult}>
                  <div className={styles.productImg}><img src={product.imageCover} alt={product.name} /></div>
                  <div className={styles.details}>
                    <div class={styles.productName}>{product.name}</div>
                    <div class={styles.price}>{product.price} AZN</div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
        <div className={styles.listGroup}>
          {/* Login / Register */}
          {!authReducer.auth ? <Link to="/login">
            <User />
          </Link> :
            <Link to="/profile/order-list">
              <span className={styles.username}> {authReducer?.profile?.name.charAt(0).toUpperCase() + authReducer?.profile?.name.slice(1)}</span>
              <User />
            </Link>}

          {/* Fav */}
          <Favorite />
          <Link to='basket'>
            <div className={styles.basketBox}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.3818 14H8.76376L7.12676 8H19.3818L16.3818 14ZM21.0828 6.948C20.7158 6.354 20.0798 6 19.3818 6H6.58176L5.96476 3.737C5.84576 3.302 5.45076 3 4.99976 3H2.99976C2.44676 3 1.99976 3.448 1.99976 4C1.99976 4.552 2.44676 5 2.99976 5H4.23576L7.03476 15.263C7.15376 15.698 7.54876 16 7.99976 16H16.9998C17.3788 16 17.7248 15.786 17.8948 15.447L21.1708 8.894C21.4838 8.269 21.4498 7.542 21.0828 6.948ZM7.49996 18C6.67196 18 5.99996 18.671 5.99996 19.5C5.99996 20.329 6.67196 21 7.49996 21C8.32796 21 8.99996 20.329 8.99996 19.5C8.99996 18.671 8.32796 18 7.49996 18ZM16 19.5C16 18.671 16.672 18 17.5 18C18.328 18 19 18.671 19 19.5C19 20.329 18.328 21 17.5 21C16.672 21 16 20.329 16 19.5Z"
                  fill="#4F4F4F"
                />
              </svg>
              <span>{basket?.totalCount ? basket?.totalCount : 0}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
