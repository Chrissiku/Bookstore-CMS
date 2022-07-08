/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import React from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

const NavBar = () => (
  <>
    <header>
      <div className="left">
        <Link to="/">
          <a className="brand">Bookstore</a>
        </Link>
        <ul className="menu">
          <Link to="/">
            <li className="active">
              <a>BOOKS</a>
            </li>
          </Link>
          <Link to="Category">
            <li>
              <a>CATEGORIES</a>
            </li>
          </Link>
        </ul>
      </div>
      <div className="right">
        <FaBeer className="icon" />
      </div>
    </header>
  </>
);

export default NavBar;
