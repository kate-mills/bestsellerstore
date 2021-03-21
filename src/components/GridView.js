import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({ items }) => {
  return (
    <Wrapper>
      <div className='items-container'>
        {items.map(({node}) => {
          return <Product key={node.id} {...node} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .items-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .items-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .items-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
