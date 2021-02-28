/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
        <Link to="/blog">
          <p>Blog</p>
        </Link>
      </div>
    </>
  );
};

export default Header;
