import React, { useState } from "react";
import styled from "styled-components";
import { MdMenu, MdShoppingCart, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSidebarContext } from "../context/sidebar_context";
import { useCartContext } from "../context/cart_context";

const Navbar = ({ onSearch }) => {
  const { total_items } = useCartContext();
  const { openSidebar } = useSidebarContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const onClear = () => {
    setSearchTerm("");
  };

  return (
    <NavbarWrapper className="bg-white flex">
      <div className="container w-100">
        <div className="brand-and-toggler flex flex-between w-100">
          <Link to="/" className="navbar-brand text-uppercase ls-1 fw-8">
            <span>c</span>ourseCart
          </Link>

          {/* <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search courses"
            className="search-input"
          /> */}
          <div className="search-form-container">
          <form class="form" >
            <button>
              <svg
                width="17"
                height="16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                // aria-labelledby="search"
              >
                <path
                  d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                  stroke="currentColor"
                  stroke-width="1.333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <input
              class="input"
              required=""
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search courses.."
            />
            <button class="reset" type="reset" onClick={onClear}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </form>
          </div>

          <div className="navbar-btns flex">
            <Link to="/cart" className="cart-btn">
              <MdShoppingCart />
              <span className="item-count-badge">{total_items}</span>
            </Link>
            <Link to="/dashboard" className="dashboard-btn">
              <MdPerson />
            </Link>
            <button
              type="button"
              className="sidebar-open-btn"
              onClick={() => openSidebar()}
            >
              <MdMenu />
            </button>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.nav`
  height: 80px;
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 12px -2px,
    rgba(0, 0, 0, 0.2) 0px 3px 7px -3px;

  .navbar-brand {
    font-size: 23px;
    span {
      color: var(--clr-orange);
    }
  }

  .search-input {
    margin-left: 20px;
    padding: 5px 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .form button {
    border: none;
    background: none;
    color: #8b8ba7;
  }
  .form {
    --timing: 0.3s;
    --width-of-input: 200px;
    --height-of-input: 40px;
    --border-height: 2px;
    --input-bg: #fff;
    --border-color: #2f2ee9;
    --border-radius: 30px;
    --after-border-radius: 1px;
    position: relative;
    width: var(--width-of-input);
    height: var(--height-of-input);
    display: flex;
    align-items: center;
    padding-inline: 0.8em;
    border-radius: var(--border-radius);
    transition: border-radius 0.5s ease;
    background: var(--input-bg, #fff);
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  .input {
    font-size: 1.3rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
  }

  .form:before {
    content: "";
    position: absolute;
    background: var(--border-color);
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
  }

  .form:focus-within {
    border-radius: var(--after-border-radius);
  }

  input:focus {
    outline: none;
  }
  input::placeholder {
    margin-left: 1rem;
    font-size: 1.3rem;
  }

  .form:focus-within:before {
    transform: scale(1);
  }

  .reset {
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
  }
  input:not(:placeholder-shown) ~ .reset {
    opacity: 1;
    visibility: visible;
  }
  .form svg {
    width: 17px;
    margin-top: 3px;
  }

  .cart-btn,
  .dashboard-btn {
    margin-right: 18px;
    font-size: 23px;
    position: relative;

    .item-count-badge {
      background-color: var(--clr-orange);
      position: absolute;
      right: -10px;
      top: -10px;
      font-size: 12px;
      font-weight: 700;
      display: block;
      width: 23px;
      height: 23px;
      color: var(--clr-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
    .search-form-container{
    width: 40%;
    
    }
    @media (max-width: 385px) {
    .search-form-container {
      display: none; /* This will hide the search bar on mobile */
    }

    /* Uncomment the following block if you want to show the search bar below the brand on mobile */
    /*
    .brand-and-toggler {
      flex-direction: column;
      align-items: flex-start;
    }

    .search-form-container {
      display: block;
      margin-top: 10px;
      width: 100%;
    }

    .form {
      width: 45%;
    }
    */
  }

  .sidebar-open-btn {
    transition: all 300ms ease-in-out;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Navbar;
