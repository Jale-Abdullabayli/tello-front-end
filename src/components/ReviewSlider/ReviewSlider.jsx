import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./reviewSlider.module.scss";

// Static images
import sliderImg1 from "../../assets/images/image1.png";

// Connections

const ReviewSlider = () => {
  return (
    <>
      <Swiper
        className={`${styles.reviewSlider}`}
        pagination={true}
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={styles.sliderPage}>
          <div className="container">
            <div className={styles.infoSide}>
              <h2>Buy & Sell</h2>
              <h2>What's Now & Next</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Felis
                malesuada et leo faucibus{" "}
              </p>
            </div>
            <div className={styles.imgSide}>
              <img src={sliderImg1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.sliderPage}>
          <div className="container">
            <div className={styles.infoSide}>
              <h2>Buy & Sell</h2>
              <h2>What's Now & Next</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                malesuada et leo faucibus{" "}
              </p>
            </div>
            <div className={styles.imgSide}>
              <img src={sliderImg1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.sliderPage}>
          <div className="container">
            <div className={styles.infoSide}>
              <h2>Buy & Sell</h2>
              <h2>What's Now & Next</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                malesuada et leo faucibus{" "}
              </p>
            </div>
            <div className={styles.imgSide}>
              <img src={sliderImg1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.sliderPage}>
          <div className="container">
            <div className={styles.infoSide}>
              <h2>Buy & Sell</h2>
              <h2>What's Now & Next</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                malesuada et leo faucibus{" "}
              </p>
            </div>
            <div className={styles.imgSide}>
              <img src={sliderImg1} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ReviewSlider;
