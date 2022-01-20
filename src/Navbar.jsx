import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
     
 <nav>      
      <ul class="links">
        <li><Link to="/Home">Home</Link></li>
        <li>
          <Link class="desktop-link" to="/Product">Product {'>'}</Link>
          <ul>
            <li><a href="https://www.javascript.com/">Javascript</a></li>
            <li><a href="#">HTML/CSS</a></li>
            <li>
              <a href="#" class="desktop-link">Frameworks {'>'}
                <span class="fa fa-plus"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>
              </a>
      
              <ul>
                <li><a href="https://reactjs.org/">React</a></li>
                <li><a href="https://angularjs.org/">Angular</a></li>
                <li><a href="https://vuejs.org/">Vue</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><Link to="/Registration">Registration</Link></li>
        <li> <Link to="/Photo">Photo Galery</Link></li>
        <li> <Link to="/Blog">Blog</Link></li>
        <li> <Link to="/Help">Help</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>

  
        </nav>
)};

export default Navbar;
