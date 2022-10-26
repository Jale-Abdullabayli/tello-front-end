import React from "react";
import StyleImageGallery from "./style";
import ImageGallery from "react-image-gallery";

// import img1 from "../../assets/images/productImg.png";
// import img2 from "../../assets/images/productImg2.png";
// import img3 from "../../assets/images/productImg3.png";
// import img4 from "../../assets/images/productImg4.png";
// import img5 from "../../assets/images/productImg5.png";

// const images = [img1, img2, img3, img4, img5];

const ProductGallery = ({images}) => {
  let sliderImages=[];

  sliderImages=images?.map(img=>{
    return {original:img}
  })


  return (
   <>
    {
      sliderImages && <StyleImageGallery>
      <ImageGallery
        items={sliderImages}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    </StyleImageGallery>
    }</>
    
  );
};
export default ProductGallery;
