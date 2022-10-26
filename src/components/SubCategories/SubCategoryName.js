import React from 'react'
import { Link } from 'react-router-dom';
import SubCategories from './SubCategories'
import styles from "./SubCategoryName.module.scss";

function SubCategoryName({ category }) {
    return (
        <div className={styles.subCategoryName}>
            <Link to={`/products/${category.slug}/1`}>{category.name}</Link>
            {category?.children?.length !== 0 && <SubCategories categoryChildren={category?.children}></SubCategories>}
        </div>
    )
}

export default SubCategoryName