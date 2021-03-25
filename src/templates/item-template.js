import React  from 'react'

import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { formatPrice } from '../utils/helpers'

import {
  SEO,
  Layout,
  PageHero,
  Stars,
  ProductImages,
  //AddToCart
} from '../components'

const SingleProductPage = ({data}) => {
  const {
    stars,
    reviewCount,
    retailPrice,
    category,
    slug,
    name,
    featured,
    skinTypeBadge,
    skinType,
    description:{description},
    imgRetail,
    video,
    keyIngredients,
    award, //integer
    awardImage,
  } = data.item
  return (
    <Layout>
      <SEO image={imgRetail.fixed.src} title={name}/>
      <Wrapper className="page section item-center">
      <PageHero title={name} shop />
      <div className="section section-center page">
        <Link to="/shop" className="btn">back to all products</Link>
         <div className="item-center">
           <ProductImages images={[imgRetail.gatsbyImageData]}description={description}/>
          <section className="content" itemScope itemType="https://schema.org/Product">
              <h2>{name}</h2>
              <Stars stars={stars} reviewCount={reviewCount} />
              <h5 className="price">{formatPrice(retailPrice/100)}</h5>
          </section>
         </div>
      </div> 
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage



export const query = graphql`
  query($slug: String) {
    item: contentfulMccProduct(slug: { eq: $slug }) {
      id
      stars
      reviewCount
      retailPrice
      category
      slug
      name
      featured
      skinTypeBadge
      skinType
      retailPrice
      description {
        description
      }
      imgRetail {
        gatsbyImageData(placeholder: TRACED_SVG)
        fixed(height: 200, width: 200, cropFocus: CENTER, quality: 100) {
          src
        }
      }
      video
      keyIngredients {
        id
        benefit
        name {
          formatted
        }
        benefit
      }
      award
      awardImage {
        gatsbyImageData(width: 100, height: 100)
      }
    }
  }
`
