import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import {Link} from 'gatsby'
import {navigate} from '@reach/router'

import { GatsbyImage } from "gatsby-plugin-image";

const Product = (props) => {
  const {
    imgRetail,
    name,
    shortName,
    retailPrice,
    slug,
  } = props
  const nm = shortName || name
  const go = async (e)=>{
    await navigate(`/products/${slug}`)
    console.log('hi there')
  }
  return (
    <Wrapper onClick={go}>
      <div className="container">
        <Link to={`/products/${slug}`}>
          <GatsbyImage image={imgRetail.gatsbyImageData} alt={name} height='225' fit='contain'/>
        </Link>
        <Link to={`/products/${slug}`} className="link"><FaSearch/></Link>
      </div>
      <footer>
        {nm.length > 19 ?
          <h5>{nm.slice(0, 19)}...</h5>:
          <h5>{nm}</h5>
        }
        
        {/* Reminder: Use cents for safer calculations */}
        <p>{formatPrice(retailPrice/100)}</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  &:hover{
    cursor: pointer;
  }
  .container {
    position: relative;
    background: var(--clr-white);
    border-radius: var(--radius);
  }
  img {
    display: block;
    object-fit: contain !important;
    object-position: center bottom;
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
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    color: var(--clr-black);
    font-weight: 400;
    font-size: 1.15rem;
  }
  footer p {
    color: var(--clr-primary-4d);
    letter-spacing: var(--spacing);
    font-size: 1.2rem;
  }
`
export default Product
