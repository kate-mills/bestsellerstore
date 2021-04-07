import React from 'react'
import logo from '../images/beauty-icon.svg'
import { Link } from 'gatsby'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'
import CartButtons from './CartButtons'
//import { useUserContext } from '../context/user_context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className="sidebar-header">
          <Link to="/" onClick={closeSidebar}>
            <img src={logo} className="logo" alt="skincare webstore logo" />
            {/* https://www.iconfinder.com/icons/3249825/health_treatment_illustration_hair_beauty_icon Creative Commons Attribution 2.5 Generic (CC BY 2.5) https://www.iconfinder.com/rizal999 */}
          </Link>
          <button
            onClick={closeSidebar}
            className="close-btn"
            type="button"
            aria-label="close sidebar"
          >
            <FaTimes />
          </button>
        </div>
        {/* CLOSE SIDEBR-HEADER */}

        <ul className="links">
          {/* START MAP */}
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
          {/* END MAP */}

          {/* START EXTRA li */}
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              checkout
            </Link>
          </li>
          {/* END EXTRA li */}
        </ul>

        <CartButtons />
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
  }
  .close-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-3);
    cursor: pointer;
    font-size: 2rem;
    margin-top: 0.2rem;
    transition: var(--transition);
  }
  .close-btn:hover {
    color: var(--clr-primary-5);
  }
  .logo {
    justify-self: center;
    height: 65px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-grey-3);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-grey-2);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
