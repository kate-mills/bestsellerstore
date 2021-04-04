import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";


const query = graphql`{
  accent: file(relativePath: {eq: "home/bottle-accent.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
    }
  }
  main: file(relativePath: {eq: "home/bottle-main-web.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
    }
  }
}
`

const Hero = () => {
  const data = useStaticQuery(query)
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          skincare webstore<br />
          best sellers
        </h1>
        <p>
          Shop the best selling products from <span className="mcc">Michele Corley Clinical Skincare</span>. Consult with Master Estheticians about products for acne, anti-aging and sensitive skin concerns.
        </p>
        <Link to='/shop' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <GatsbyImage image={data.main.childImageSharp.gatsbyImageData} alt='Drop falls from a pipette into a cosmetic bottle,isolated on white background' className='main-img' />
        <GatsbyImage image={data.accent.childImageSharp.gatsbyImageData} alt='Cosmetic bottle with pipette isolated on transparent background' className='accent-img' />
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  min-height: 60vh;
  place-items: center;
  .img-container {
    display: none;
  }
  p {
    color: var(--clr-grey-5);
    font-size: 1rem;
    line-height: 2;
    margin-bottom: 2rem;
    max-width: 45em;
  }
  h1 {
    margin-top: 2rem;
  }
  @media (min-width: 992px) {
    gap: 8rem;
    grid-template-columns: 1fr 1fr;
    height: calc(100vh - 5rem);
    h1 {
      margin-top: 1rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      font-size: 1rem;
      padding: 0.75rem 1.5rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      border-radius: var(--radius);
      display: block;
      height: 550px;
      object-fit: cover;
      position: relative;
      width: 100%;
    }
    .accent-img {
      border-radius: var(--radius);
      bottom: 0;
      left: 0;
      position: absolute;
      transform: translateX(-50%);
      width: 250px;
    }
    .img-container::before {
      background: var(--clr-primary-9);
      border-radius: var(--radius);
      bottom: 0%;
      content: '';
      height: 80%;
      left: -8%;
      position: absolute;
      width: 10%;
    }
  }
`

export default Hero
