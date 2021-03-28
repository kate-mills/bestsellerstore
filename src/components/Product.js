import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import {Link} from 'gatsby'

import { GatsbyImage } from "gatsby-plugin-image";

const Product = (props) => {
  const {
    imgRetail,
    name,
    retailPrice,
    slug,
  } = props
  return (
    <Wrapper>
      <div className="container">
        <Link to={`/shop/${slug}`}>
          <GatsbyImage image={imgRetail.gatsbyImageData} alt={name} height='225' fit='contain'/>
        </Link>
        <Link to={`/shop/${slug}`} className="link"
          onClick={()=>{

          }}
        ><FaSearch/></Link>
      </div>
      <footer>
        <h5>{name.substring(0, 21)}...</h5>
        {/* Reminder: Use cents for safer calculations */}
        <p>{formatPrice(retailPrice/100)}</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-white);
    border-radius: var(--radius);
  }
  img {
    display: block;
    object-fit: contain !important;
    background: var(--clr-white);
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 0;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    position: relative;
    bottom: 3rem;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    color: var(--clr-black);
    font-weight: 400;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`
export default Product
