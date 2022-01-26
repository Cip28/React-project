import React, { Component } from "react";

export class Help extends Component {
  render() {
    return (
      <div className="help-wrapper">
        <div className="help-form">
          <h1 style={{ marginBottom: "2rem", paddingTop: "4rem" }}>
            Need some help?
          </h1>
          <input
            type="text"
            placeholder="What are you having trouble with?"
            id="help"
          />
          <input type="submit"></input>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="both-help">
          <div className="fields">
            <h3>General</h3>
            <ul>
              <li>
                <a href=" ">How much does one course costs?</a>
              </li>
              <li>
                <a href=" ">What is the benefit of these courses?</a>
              </li>
              <li>
                <a href=" ">How does a course lasts?</a>
              </li>
              <li>
                <a href=" ">Can everyone purchase a course?</a>
              </li>
              <li>
                <a href=" ">
                  At the end of the course, what will be our level?
                </a>
              </li>
            </ul>
          </div>
          <div className="fields">
            <h3>Metrics</h3>
            <ul>
              <li>
                <a href=" ">Do we get a diploma at the end of a course?</a>
              </li>
              <li>
                <a href=" ">Is the diploma internationally recognized?</a>
              </li>
              <li>
                <a href=" ">How many students are in one class?</a>
              </li>
              <li>
                <a href=" ">
                  Can we affiliate with you after buying the course?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
