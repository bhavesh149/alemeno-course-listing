import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
        <div className="inner">
      <Link to="/" className="navbar-brand text-uppercase ls-1 fw-8">
        <span>c</span>ourseCart
      </Link>
      <span>© 2024 coursecart, Inc.</span>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  background-color: #2d2f31;
  color: #fff;
  margin-top: 5rem;
    .inner{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 1rem;
    }
  .navbar-brand {
    font-size: 23px;
    span {
      color: var(--clr-orange);
    }
  }
`;

export default Footer;
