import React, { Component } from "react";

export class Photo extends Component {
  render() {
    return (
      <div className="photo-wrapper">
        <div className="photo">
          <h2>Now you can code everywhere. Don't hesitate to travel!</h2>
          <br></br>
          <div className="photo-galery">
            <img src="./images/travel.jpg" className="rounded" alt=""></img>
            <img src="./images/travel2.jpg" className="rounded" alt=""></img>
            <img src="./images/travel3.jpg" className="rounded" alt=""></img>
          </div>

          <h2> A few of our offices:</h2>
          <div className="photo-galery">
            <img src="./images/office1.jpg" className="rounded" alt=""></img>
            <img src="./images/office2.jpg" className="rounded" alt=""></img>
            <img src="./images/office3.jpg" className="rounded" alt=""></img>
          </div>
          <h2> Our online and offline classes:</h2>
          <div className="photo-galery">
            <img src="./images/class1.jpg" className="rounded" alt=""></img>
            <img src="./images/class2.jpg" className="rounded" alt=""></img>
            <img src="./images/class3.jpg" className="rounded" alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Photo;
