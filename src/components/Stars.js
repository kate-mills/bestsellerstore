import React from 'react'
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
const Stars = ({ stars = 3.9, reviewCount = 12 }) => {
  const starArray = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index}>
        {' '}
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}{' '}
      </span>
    )
  })
  return (
    <Wrapper>
      <div className="stars">{starArray}</div>
      <div className="reviews">
        (
        <span className="review-count">
          <span className="count">{reviewCount || 1}</span>customer reviews
        </span>
        )
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  span {
    color: var(--clr-primary-4);
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  .reviews {
    position: relative;
    bottom: 3px;
  }
  .review-count {
    color: var(--clr-black);
    margin-right: 2px;
    .count {
      color: var(--clr-black);
      margin-left: 2px;
      position: relative;
      top: 1.5px;
    }
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`
export default Stars
