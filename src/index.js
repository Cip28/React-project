import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './Home'
import Product from './Product'
import Registration from './Registration'
import Photo from './Photo'
import Contact from './Contact'
import Blog from './Blog'
import Help from './Help'
import 'bootstrap/dist/css/bootstrap.min.css'



const routing=(
  <Router>
    <div>

    <header>
    <h3 class="h3">LIVE VIRTUAL CLASS</h3>
      <img src="cool-background.png"></img>
    
    </header>

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





  

      <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/Home" component={Home}/>
      <Route path="/Registration" component={Registration}/>
      <Route path="/Product" component={Product}/>
      <Route path="/Photo" component={Photo}/>
      <Route path="/Blog" component={Blog}/>
      <Route path="/Help" component={Help}/>
      <Route path="/Contact" component={Contact}/>
      </Switch>


{
  /*
  
   <section class="cards1">
  <article>
  <h4>Most searched courses from our site:</h4>
  <br></br>
  <div class="card1">
  <img src="javascript.png" class="card-img-top" alt="JS Course"/>
  <div class="card1-body">
    <h5 class="card1-title">Javascript</h5>
    <p class="card1-text">37 hours of beginning to advanced steps</p>
    <a href="#" class="btn btn-primary">Check it out</a>
  </div>
</div>
</article>

  <article>
  <br></br>
<br></br>

  <div class="card1">
  <img src="javascript.png" class="card-img-top" alt="JS Course"/>
  <div class="card1-body">
    <h5 class="card1-title">Javascript</h5>
    <p class="card1-text">37 hours of beginning to advanced steps</p>
    <a href="#" class="btn btn-primary">Check it out</a>
  </div>
</div>
</article>
</section>


  
  */
}
  
    
<section>

</section>

        <footer class="footer">
        <div class="all"  id="search-bar">
          <div class="input-group">
          <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
          aria-describedby="search-addon" />
          <button type="button" class="btn btn-outline-primary">search</button>
          </div>
          </div>
  <h4>Designed by Barbu Ciprian</h4>
  
  <div class="small text-center text-muted fst-italic">Copyright &copy; Your Website 2021</div>
 
    </footer>
   </div>
  </Router>
)

ReactDOM.render(
routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
