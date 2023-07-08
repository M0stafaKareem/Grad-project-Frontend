import React from "react";
import { Component } from "../../components/Component";
import "./style.css";

export const Box = (props) => {
  return (
    <div className="box">
      <button className="component-wrapper" onClick={props.onClick}>
        <Component className="component-1" property1="default" />
      </button>
    </div>
  );
};
