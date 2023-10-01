import React from "react";
import "./Card.css";
import { getTimeAgo } from "../../utils/time";
import ReactEffect from "../ReactEffect/ReactEffect";

export default function Card({ item }) {
  console.log([item]);
  const { img, name, comment, daysAgo } = item;
  return (
    <div className="cardContainer">
      <img className="cardImg" src={img} alt={name} />

      <div className="cardSection">
        <h3 className="cardName">{name}</h3>
        <p className="cardComment">{comment}</p>
        <div className="cardBottomItem">
          <h6>{daysAgo}</h6>

          <ReactEffect>
            <button className="cardLikeBtn">like</button>
          </ReactEffect>
        </div>
      </div>
    </div>
  );
}
