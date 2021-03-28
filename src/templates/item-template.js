/* eslint-disable react-hooks/exhaustive-deps*/
import React  from 'react'

import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { formatPrice } from '../utils/helpers'
import {useProductsContext} from '../context/products_context'

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
    sizes,
    shortName,
    stars,
    reviewCount,
    retailPrice,
    //category,
    //slug,
    name,
    //featured,
    skinTypeBadge,
    //skinType,
    description:{description},
    imgRetail,
    priceMap,
    //video,
    //keyIngredients,
    award, //integer
    //awardImage,
  } = props.data.item

  const {isLongName} = props.pageContext
  const {focus_price, setFocusPrice} = useProductsContext()

  React.useEffect(()=>{ 
    setFocusPrice(retailPrice/100)
  }, [])

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
            <Stars stars={stars} reviewCount={reviewCount} />
            <h5 className="price">{formatPrice(focus_price)}</h5>
            <p className="product-skintypes info">
              { skinTypeBadge ?
                  skinTypeBadge.map((type, id)=>{
                    return(<span key={id} className="skintype">{type}</span>
                    )}):<span className="skintype">No badge</span>
              }
            </p>
            <p className="info award">{award && `Dermascope Aestheticians Choice Award - ${award}`}</p>
            <p className="product-company">Michele Corley Clinical Skincare</p>
            <p className="desc">{description}</p>
            <hr/>
            <AddToCart id={id} sizes={sizes} item={{...props.data.item}} priceMap={priceMap ? priceMap:null} />
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
    color: var(--clr-black);
    font-size: 1.75rem;
  }
  .long-name{
    font-size: 1.25rem;
  }
  .price {
    color: var(--color-black);
  }
  .product-company{
    color: var(--clr-primary-3);
    font-family: 'bree';
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: unset;
    width: fit-content;
  }
  .product-skintypes::before{
    content: 'Skin Types:';
    font-family: 'bree';
    font-size: 1rem;
    font-weight: 300;
    margin-right: 0.5rem;
  }
  .info.award{
    background: var(--clr-primary-11);
    color: var(--clr-grey-4);/* #00626f; bluish*/
    font-style: italic;
    width: fit-content;
    padding-left: 0.10rem;
    padding-right: 0.20rem;
  }
  .product-skintypes{
    font-family: 'proxima-nova';
    line-height: 30px;
    max-width: 45em;
    text-transform: capitalize;
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
  .desc {
    line-height: 2;
    max-width: 45em;
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
    .product-skintypes::before{
    }
  }
`

export default SingleProductPage



export const query = graphql`
  query($slug: String) {
    item: contentfulMccProduct(slug: { eq: $slug }) {
      id
      sizes
      shortName
      stars
      reviewCount
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
      priceMap {
        id
        name
        size
        price
      }
    }
  }
`
