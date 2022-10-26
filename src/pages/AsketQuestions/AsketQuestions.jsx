import React, { useState,useEffect } from "react";
import axios from '../../api/index';

import styles from "./askedQuestions.module.scss";

const AskedQuestions = () => {
  const [openAnswer, setOpenAnswer] = useState("");
  const [FAQ, setFAQ] = useState([]);

const getFAQ= async()=>{
  const response=await axios.get('/FAQ');
  setFAQ(response.data.data.FAQs);
};


  useEffect(() => {

    getFAQ();
    
  }, []);


  return (
    <div className={styles.questionPage}>
      <div className="container">
        <h3>Tez-tez verilən suallar</h3>
        {FAQ.map((el) => {
         return <div
            className={`${styles.question} ${openAnswer == el._id && styles.active
              }`}
            onClick={(e) => {
              setOpenAnswer(openAnswer == el._id ? "" : el._id);
            }}
          >
            <div className={styles.questionHeader}>
              <h5>
                {el.title}
              </h5>
              <svg
                className={openAnswer == el._id && styles.active}
                w_idth="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"
                  fill="#4F4F4F"
                />
              </svg>
            </div>
            <p>
              {el.description}
            </p>
          </div>
        })}
        
      </div>
    </div>
  );
};

export default AskedQuestions;
