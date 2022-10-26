import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import axios from '../../api/index';
import { NavLink } from 'react-router-dom'



import SubCategories from "../SubCategories/SubCategories";



const Navbar = ({ hamMenu }) => {
  const [menuCategories, setMenuCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedNav, setselectedNav] = useState(false);
  const [children, setChildren] = useState([]);


  const getCategories = async () => {
    const response = await axios.get('/categories');
    setMenuCategories(response?.data?.data?.categories.filter(category => category?.parentId?.length === 0));
    setSubCategories(response?.data?.data?.categories.filter(category => category?.parentId?.length !== 0));
  };

  useEffect(() => {
    function editArray(arr, parent) {
      var newArray = []
      for (var i in arr) {
        if (arr[i]?.parentId?.includes(parent)) {
          var children = editArray(arr, arr[i]._id)
          // delete arr[i].id
          // delete arr[i].parentId
          arr[i].children = []
          if (children.length) {
            arr[i].children = children
          }
          newArray.push(arr[i])
        }
      }
      return newArray
    }


    menuCategories.forEach(el => {
      let res = editArray(subCategories, el._id);
      el["children"] = res;
    })
  }, [menuCategories, subCategories]);

  useEffect(() => {
    getCategories();
  }, []);

  function mouseEnter(children) {
    setselectedNav(true);
    setChildren(children)
  }
  return (
    <div className={styles.navbar} >
      <div className="container">
        <div className={styles.navigations}>
          {menuCategories.map((category, index) => {
            return <NavLink onMouseEnter={() => mouseEnter(category.children)} onMouseLeave={() => setselectedNav(false)} className={({ isActive }) => (isActive ? styles.active : 'inactive')}
              key={index} to={`/products/${category.slug}/1`}>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</NavLink>

          })}


        </div>
      </div>
      {selectedNav && children.length!==0 && <div onMouseEnter={()=>setselectedNav(true)}  onMouseLeave={() => setselectedNav(false)} className={styles.subCategories}>
        <div className="container">
          <SubCategories  categoryChildren={children}></SubCategories>
        </div>
      </div>}

    </div>
  );
};

export default Navbar;
