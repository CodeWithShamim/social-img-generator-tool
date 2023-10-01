import React from "react";
import "./ReactEffect.css";

export default function ReactEffect({ children }) {
  return (
    <div className="react">
      <div className="react-me">
        {children}
        <div className="inner">
          <div className="react-box">
            <ul className="react-list">
              <li className="like" data-hover="Like"></li>
              <li className="love" data-hover="Love"></li>
              <li className="haha" data-hover="Haha"></li>
              <li className="wow" data-hover="Wow"></li>
              <li className="sad" data-hover="Sad"></li>
              <li className="angry" data-hover="Angry"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
