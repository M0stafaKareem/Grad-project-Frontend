import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`component ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="frame">
        <div className="div">
          <div className="homepage-design">details</div>
          <img
            className="arrow"
            alt="Arrow"
            src={
              state.property1 === "variant-2"
                ? "/arrow-1-2.svg"
                : "/arrow-1.svg"
            }
          />
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

Component.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
