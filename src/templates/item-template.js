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
  AddToCart
} from '../components'

const SingleProductPage = (props) => {
  const {
    id,
    shortName,
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
  } = props.data.item

  const {isLongName} = props.pageContext // words >= 4

  return (
    <Layout>
      <SEO image={imgRetail.fixed.src} title={shortName || name} description={description}/>
    <Wrapper>
      <PageHero title={shortName || name} isLongName={isLongName} shop />
      <div className='section section-center page'>
        <Link to="/shop" className="btn">back to all products</Link>
        <div className='product-center'>
           <ProductImages images={[imgRetail.gatsbyImageData]}description={description}/>
          <section className="content" itemScope itemType="https://schema.org/Product">
            <h2 className={`${isLongName? 'long-name product-name':'product-name'}`}>{name}</h2>
            <h3 className="product-company">Michele Corley Clinical Skincare</h3>
            <Stars stars={stars} reviewCount={reviewCount} />
            <h4 className="product-skintypes">
              { skinTypeBadge ?
                  skinTypeBadge.map((type, id)=>{
                    return(<span key={id} className="skintype">{type}</span>
                    )}):<span className="skintype">No badge</span>
              }
            </h4>
            <h5 className="price">{formatPrice(retailPrice/100)}</h5>
            <p className="desc">{description}</p>
            <hr/>
            <AddToCart id={id} item={{...props.data.item}} />
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
  .product-name{
    color: var(--clr-primary-3);
    font-size: 1.75rem;
  }
  .long-name{
    font-size: 1.25rem;
  }
  .product-company{
    color: var(--clr-black);
    font-size: 1.5rem;
    width: fit-content;
  }
  .underline{
    height: 10px;
    width: 75%;
    background: var(--clr-primary-11);
  }
  .price {
    color: var(--clr-primary-1);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .product-skintypes::before{
    content: 'Skin Types:';
    margin-right: 1rem;
    font-weight: 400;
    font-family: 'bree';
  }
  .product-skintypes{
    font-family: 'proxima-nova';
    line-height: 30px;
    font-size: 1.25rem;
    .skintype:first-of-type{
      padding-left: 0;
    }
    .skintype{
      padding-left: 8px;
    }
    .skintype::after{
      content: ','
    }
    .skintype:last-of-type::after{
      content: ''
    }
  }
  .info {
    text-transform: capitalize;
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
      shortName
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
