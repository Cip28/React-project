import React, { useState } from "react";
import ReactTextCollapse from "react-text-collapse/dist/ReactTextCollapse";
import data from "./dataBlog.js";

const TEXT_COLLAPSE_OPTIONS = {
  collapse: false,
  collapseText: "Show more..",
  expandText: "show less",
  minHeight: 45,
  maxHeight: 200,
  textStyle: {
    textAlign: "center",
    fontSize: "12px",
    backgroundColor: "#90e0ef",
    padding: "7px 5px",
    borderRadius: "5px",
    float: "none",
    width: "100px",
    margin: "10px auto",
  },
};

export default function Blog() {
  const { cards } = data;

  return (
    <div className="blog-wraper">
      <h2 className="text-center">Useful Articles for Web Developers</h2>
      <div className="container-blog">
        {cards.map((item) => {
          return (
            <div className={`card card${item.id}`} key={item.id}>
              <img className="card-img-top" src={`${item.image}`} alt="" />
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                  <p className={`card-text`}>{item.text}</p>
                </ReactTextCollapse>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
