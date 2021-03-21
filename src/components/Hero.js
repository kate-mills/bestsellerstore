import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export const query = graphql`
  {
    fashion: file(relativePath: { eq: "index-hero.png" }) {
      childImageSharp {
        fluid(cropFocus: SOUTHWEST, fit: CONTAIN){
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const { fashion } = useStaticQuery(query)
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Designs by
          <br />
          Hilary Molloy
        </h1>
        <p>
          Hand cut designs made with love and natural elements by yours truly,
          in the beautiful Napa Valley. *coming soon* hideandwild.com
        </p>
        <Link to="/shop" className="btn hero-btn">
          Shop now
        </Link>
      </article>
      <article className="img-container">
        <Image 
          objectFit="contain"
          fluid={fashion.childImageSharp.fluid} alt="Compilation of 2 images, of women wearing Hide and Wild jewelry."
          className="main-img"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container { display: none; }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      width: 100%;
      display: block;
      position: relative;
    }
    .gatsby-image-wrapper{
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      object-fit: contain;
      display: block;
    }
    .gatsby-image-wrapper img{
      object-fit: contain;
    }
    .main-img {
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateX(-10%);
      border-radius: var(--radius);
      object-fit: contain;
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 0%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      border-radius: var(--radius);
    }
  }
`
export default Hero
