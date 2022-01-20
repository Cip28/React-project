import React from 'react';

const Footer = () => {
    return (
          <footer class="footer">
            <div class="all" id="search-bar">
              <div class="input-group">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                  aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary">search</button>
              </div>
            </div>
            <h4>Designed by Barbu Ciprian</h4>
  
            <div class="small text-center text-muted fst-italic">Copyright &copy; Your Website 2021</div>
 
          </footer>
        
    )
};

export default Footer;
