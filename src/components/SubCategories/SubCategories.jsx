import React, { useEffect } from "react";

import styles from "./subCategories.module.scss";
import SubCategoryName from './SubCategoryName';

const SubCategories = ({ categoryChildren }) => {


  return (
   
    <>
      {
          categoryChildren.map(el => <SubCategoryName tegoryName key={el._id} category={el}></SubCategoryName>)
        }
    </>
  
  
  );
};

export default SubCategories;
