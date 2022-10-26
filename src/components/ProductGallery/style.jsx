import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";

const StyleImageGallery = styled.div`
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 1.773rem;
    margin-top: 0.8rem;
  }
  .image-gallery-icon {
    color: #2e3a59;
    filter: none;
  }
  .image-gallery-svg {
    width: 26.59px;
    height: 26.59px;
  }
  .image-gallery-image {
    object-fit:contain;
    width: 152.36px;
    height: 214.97px;
    box-sizing: content-box;
    padding: 2.7rem;
    object-fit: cover;
  }
  .image-gallery-thumbnail {
    width: 39.89px;
    height: 47.65px;
    cursor: pointer;
    border: 0;
    &.active {
      border: 0;
    }
    img {
      object-fit: cover;
      height: 100%;
      border-radius: 2.21621px;
    }
    span {
      height: 100%;
    }
  }
  @media (min-width: 768px) {
    .image-gallery-image {
      width: 275px;
      height: 388px;
    }
    .image-gallery-svg {
      width: 48px;
      height: 48px;
    }
    .image-gallery-thumbnail {
      width: 72px;
      height: 86px;
    }
    nav {
      margin-top: 1.6rem;
      gap: 3.2rem;
    }
  }
`;

export default StyleImageGallery;
