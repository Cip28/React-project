import React from "react";
import background from './images/cool-background.png'

const Header = () => {
  return (
    <header>
      <img src={background} alt="background"></img>
      <h3>LIVE VIRTUAL CLASS</h3>
    </header>
  );
};

export default Header;
