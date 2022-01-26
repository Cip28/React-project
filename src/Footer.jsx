import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="all" id="search-bar">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" className="btn btn-outline-primary">
            search
          </button>
        </div>
      </div>
      <h4>Designed by Barbu Ciprian</h4>

      <div className="small text-center text-muted fst-italic">
        Copyright &copy; Your Website 2021
      </div>
    </footer>
  );
};

export default Footer;
