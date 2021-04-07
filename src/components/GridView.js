import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({ items }) => {
  return (
    <Wrapper className="section-center">
      <div className="items-container">
        {items.map(({ node }) => {
          return <Product key={node.id} {...node} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  img {
    width: 175px;
  }

  .items-container {
    background: white;
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 0.5rem 1.5rem;
  }

  /*phone*/
  @media (min-width: 300px) and (max-width: 480px) {
    .items-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  /*tablet - sm*/
  @media (min-width: 481px) and (max-width: 767px) {
    .items-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /*tablet - landscape*/
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    .items-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  /*tablet - md*/
  @media (min-width: 768px) and (max-width: 1024px) {
    .items-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  /*tablet - lg*/
  @media (min-width: 1025px) and (max-width: 1280px) {
    .items-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  /*desktop*/
  @media (min-width: 1281px) {
    .items-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export default GridView
