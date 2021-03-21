/* eslint-disable jsx-a11y/no-noninteractive-element-interactions*/

import React, {useState } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const ProductImages = ({images=[],  description}) => {
  const [main, setMain ] = useState(images[0])
  return (
    <Wrapper>
      <Image
        fluid={main.fluid}
        alt={description || ""}
      />
      <div className="gallery">
        {images.map((img, index)=>{
          return(
            <img
              onKeyPress={()=>setMain(images[index])}
              key={index}
              onClick={()=> setMain(images[index])}
              src={img.fluid.src}
              alt={`View ${index} of ${description}`}
              className={`${img.fluid.src===main.fluid.src ? 'active': null}`}
            />
          )  
       })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .gatsby-image-wrapper {
    height: 600px;
    object-fit: contain !important;
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
    .gatsby-image-wrapper {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .gatsby-image-wrapper {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`
export default ProductImages
