/* eslint-disable react-hooks/exhaustive-deps*/
import React  from 'react'

import styled from 'styled-components'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { formatPrice } from '../utils/helpers'
import {useProductsContext} from '../context/products_context'

import {
  MySeo,
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
    award,/*year*/
    //awardImage,
  } = props.data.item

  const {isLongName} = props.pageContext
  const {focus_price, setFocusPrice} = useProductsContext()

  React.useEffect(()=>{ 
    setFocusPrice(retailPrice/100)
  }, [])

  return (
    <Layout>
      <MySeo 
        image={imgRetail.file.url}
        title={`Michele Corley ${shortName || name}`}
        description={description}
        product={props.data.item}
      />
    <Wrapper>
      <PageHero title={shortName || name} isLongName={isLongName} shop />
      <div className='section section-center page'>
        <Link to="/shop" className="back btn">back to all products</Link>
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
            <p className="product-company">Brand: <span>Michele Corley Clinical Skincare</span></p>
            <p className="info award"><span>{award && `Dermascope Aestheticians Choice Award - ${award}`}</span></p>
            <hr/>
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
    .back.btn{
      padding:0.85rem 0.75rem;
  }
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
    font-size: 1.5rem;
  }
  .price {
    color: var(--color-black);
    letter-spacing: var(--spacing) !important;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  .product-company{
    font-size: 1rem;
    > span{
      font-size: 1rem;
      font-family: var(--font-title);
      font-weight: var(--font-weight-title);
    }
  }
  .product-skintypes::before{
    content: 'Skin Types:';
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  .info.award{
    >span{
      background: var(--clr-primary-11);
      color: var(--clr-black);
      font-family: var(--font-body);
      font-weight: var(--font-weight-body);
      letter-spacing: 1px;
    }
  }
  .product-skintypes{
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
      content: ',';
    }
    .skintype:last-of-type::after{
      content: '';
    }
  }
  .desc {
    line-height: 2;
    margin-top: 1.25rem;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    span {
      font-family: var(--font-title);
      font-weight: var(--font-weight-title); /* font-title - span */
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
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
        fixed(height: 500, width: 500, cropFocus: CENTER, quality: 100) {
          src
        }
        file{
          url
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
        cid
        name
        size
        price
      }
    }
  }
`
