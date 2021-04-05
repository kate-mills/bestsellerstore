import React from 'react'
import styled from 'styled-components'
import { shopTypes } from '../utils/constants'
import {Link} from 'gatsby'

const ShopBy = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>Shop Smarter<br/>
            Three ways to filter products
          </h3>
          <p>
            Shop by Skin Condition, Product Type, or use an Advanced Filter to get you to glowing skin.
          < /p>
        </article>
        <div className="services-center">
          {shopTypes.map((service)=>{
            const {id, url, icon, title, text} = service
            return(
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4><Link to={url}>{title}</Link></h4>
                <p><Link to={url}>Click here {text}</Link></p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3 {
    color: var(--clr-primary-1);
  }
  h4{
    font-size: 1.4rem;
    color: var(--clr-primary-11);
    a {
      color: var(--clr-primary-11);
      margin-left: 0.1rem;
      font-size: 1.55rem;
    }
  }
  h3{ line-height: 2.35rem; text-transform: none;}
  padding: 5rem 0;

  background: var(--clr-primary-9);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    font-size: 1.2rem;
    color: var(--clr-primary-1);
    a {
      color: var(--clr-primary-11);
    }
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-black);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-11);
      font-size: 1rem;
    }
    h4{
      color: var(--clr-primary-9);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default ShopBy
