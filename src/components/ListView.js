import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import AniLink from "gatsby-plugin-transition-link/AniLink/Fade"
import Img from 'gatsby-image'

const ListView = ({items}) => {
  return(
    <Wrapper>
      {items.map(({node})=>{
        return (
          <article key={node.id}>
            <Img fluid={node.images[0].fluid} alt={node.name}/>
            <div>
              <h4>{node.name}</h4>
              <h5 className="price">{formatPrice(node.price)}</h5>
              <p>{node.description.description.substring(0, 150)}...</p>
              <AniLink fade to={`/shop/${node.slug}`} className="btn">Details</AniLink>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  div.gatsby-image-wrapper{
    display: block;
    width: 300px;
    height: 200px;
    border-radius: var(--radius);
    margin-bottom: 1rem;
    img{
      object-fit: contain !important;
    }
  }

  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
