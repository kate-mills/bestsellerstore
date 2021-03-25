/* eslint-disable jsx-a11y/no-noninteractive-element-interactions*/

import React, {useState } from 'react'
import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image";

const ProductImages = ({images=[],  description}) => {
  const [main, setMain ] = useState(images[0])
  return (
    <Wrapper>
      <GatsbyImage image={main} alt={description || ""} />
      <div className="gallery">
        {images.map((img, index)=>{
          return(
            <GatsbyImage
              onKeyPress={()=>setMain(images[index])}
              key={index}
              onClick={()=> setMain(images[index])}
              image={main || img.images.src}
              alt={`View ${index} of ${description}`}
              className={`mini ${main ? 'active': null}`}
            />
          )  
       })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .gatsby-image-wrapper {
    height: 600px;
    object-fit: contain !important;
  }
  .gatsby-image-wrapper.mini{
    height: 100%;
    max-width: 100px;
    object-fit: contain !important;
    img{
      padding: 0.25rem;
    }
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain !important;
    cursor: pointer;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    border: 2px solid var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .gatsby-image-wrapper { height: 300px; }
    .gallery { img { height: 75px; } }
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper { height: 500px; }
    .gallery { img { height: 75px; } }
  }
`
export default ProductImages
