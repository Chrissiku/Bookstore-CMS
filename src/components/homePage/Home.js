/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable quotes */
import React from "react";
import { FaBeer } from "react-icons/fa";

const HomePage = () => (
  <>
    <div className="container">
      <header>
        <div className="left">
          <a className="brand">Bookstore</a>
          <ul className="menu">
            <li className="active">
              <a>BOOKS</a>
            </li>
            <li>
              <a>CATEGORIES</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <FaBeer className="icon" />
        </div>
      </header>
      <main>
        <div className="book">
          <div>
            <span>Action</span>
            <h3>The Hunger Games</h3>
            <span>Suzanne Collins</span>
            <ul>
              <li>
                <a>Comments</a>
              </li>
              <li>
                <a>Remove</a>
              </li>
              <li>
                <a>Edit</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  </>
);

export default HomePage;
