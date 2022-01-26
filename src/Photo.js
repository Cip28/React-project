import React, { Component } from "react";
import travel from "./images/travel.jpg";
import travel2 from "./images/travel2.jpg";
import travel3 from "./images/travel3.jpg";
import office1 from "./images/office1.jpg";
import office2 from "./images/office2.jpg";
import office3 from "./images/office3.jpg";
import class1 from "./images/class1.jpg";
import class2 from "./images/class2.jpg";
import class3 from "./images/class3.jpg";



export class Photo extends Component {
  render() {
    return (
      <div className="photo-wrapper">
        <div className="photo">
          <h2>Now you can code everywhere. Don't hesitate to travel!</h2>
          <br></br>
          <div className="photo-galery">
            <img src={travel} className="rounded" alt=""></img>
            <img src={travel2} className="rounded" alt=""></img>
            <img src={travel3} className="rounded" alt=""></img>
          </div>

          <h2> A few of our offices:</h2>
          <div className="photo-galery">
            <img src={office1} className="rounded" alt=""></img>
            <img src={office2} className="rounded" alt=""></img>
            <img src={office3} className="rounded" alt=""></img>
          </div>
          <h2> Our online and offline classes:</h2>
          <div className="photo-galery">
            <img src={class1} className="rounded" alt=""></img>
            <img src={class2} className="rounded" alt=""></img>
            <img src={class3} className="rounded" alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;
