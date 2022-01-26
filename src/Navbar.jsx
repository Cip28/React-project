import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link className="desktop-link" to="#">
            Product {">"}
          </Link>
          <ul>
            <li>
              <a href="https://www.javascript.com/">Javascript</a>
            </li>
            <li>
              <a href=" ">HTML/CSS</a>
            </li>
            <li>
              <Link to className="desktop-link">
                Frameworks {">"}
                <span className="fa fa-plus">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </Link>

              <ul>
                <li>
                  <a href="https://reactjs.org/">React</a>
                </li>
                <li>
                  <a href="https://angularjs.org/">Angular</a>
                </li>
                <li>
                  <a href="https://vuejs.org/">Vue</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/Registration">Registration</Link>
        </li>
        <li>
          {" "}
          <Link to="/Photo">Photo Galery</Link>
        </li>
        <li>
          {" "}
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          {" "}
          <Link to="/Help">Help</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
