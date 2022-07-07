/* eslint-disable react/self-closing-comp */
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
          <div className="l">
            <span className="type">Action</span>
            <h3>The Hunger Games</h3>
            <span className="author">Suzanne Collins</span>
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

        <div className="r">
          <div className="progress">
            <div className="circle">
              <div className="inner">hello</div>
            </div>
            <div className="progress val">
              <span>65%</span>
              <span>Completed</span>
            </div>
          </div>
          <span className="line"></span>
          <div className="chapter">
            <h4>CURRENT CHAPTER</h4>
            <span>Chapter 17</span>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </main>
    </div>
  </>
);

export default HomePage;
