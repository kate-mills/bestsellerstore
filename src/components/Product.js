import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { FaSearch } from 'react-icons/fa'
import { Link, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Product = props => {
  const { imgRetail, name, shortName, retailPrice, slug } = props
  const nm = shortName || name

  return (
    <Wrapper>
      <div className="container">
        <GatsbyImage
          image={imgRetail.gatsbyImageData}
          alt={name}
          height="175"
          width="175"
          fit="contain"
          onClick={() => navigate(`/products/${slug}`)}
        />
        <Link to={`/products/${slug}`} className="link">
          <FaSearch />
        </Link>
      </div>
      <footer>
        {nm.length > 19 ? <h5>{nm.slice(0, 19)}...</h5> : <h5>{nm}</h5>}
        <p>{formatPrice(retailPrice / 100)}</p>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  & {
    margin: 0 auto;
    padding: 0 0.2rem;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
  }
  .container {
    max-width: 300px;
    position: relative;
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    margin: 0 auto;
  }
  img {
    display: block;
    object-fit: contain !important;
    object-position: center center;
    background: var(--clr-white);
    border-radius: var(--radius);
    margin: 0 auto;
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
    flex-wrap: wrap;
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
  & footer {
    align-items: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    justify-content: center;
    letter-spacing: var(--spacing);
  }
  & footer h5 {
    color: var(--clr-black);
    white-space: pre;
  }
  & footer p {
    color: var(--clr-primary-4d);
  }
`
export default Product
