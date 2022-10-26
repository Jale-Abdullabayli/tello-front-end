import React, { useState } from "react";

import styles from "./filterSection.module.scss";

import Filter from "../Filter/Filter";

const FilterSection = ({setBrends,brends}) => {
  
  const [openFilter, setOpenFilter] = useState(false);


  return (
    <div className={styles.filterSection}>
      <div
        className={styles.sectionName}
        onClick={() => setOpenFilter(!openFilter)}
      >
        <h5>Brend</h5>
        {/* <span className={styles.filterCount}>(4)</span> */}
        <span className={styles.openClose}>
          <div
            className={styles.lineY}
            style={
              openFilter
                ? { transform: "rotateX(90deg) translate(0,0)" }
                : { transform: "rotateX(0deg) translate(-50%,-50%)" }
            }
          ></div>
          <div className={styles.lineX}></div>
        </span>
      </div>
      <div
        className={styles.filterSelections}
        style={
          openFilter
            ? { height: "0px", paddingTop: "0", paddingBottom: "0" }
            : { height: "auto" }
        }
      >
        <Filter setBrends={setBrends} brends={brends}></Filter>
      </div>
    </div>
  );
};

export default FilterSection;
