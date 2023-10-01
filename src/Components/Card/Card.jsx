import React from "react";
import "./Card.css";

export default function Card({ item }) {
  const { img, name, comment, daysAgo, likeCounter, reacts } = item;

  return (
    <div className="cardContainer">
      <img className="cardImg" src={img} alt={name} />

      <div className="cardSection">
        <h3 className="cardName">{name}</h3>
        <p className="cardComment">{comment}</p>
        <div className="cardBottomItem">
          <h6>{daysAgo} days ago</h6>
          <h6>{likeCounter} likes</h6>

          <div className="reactImgContainer">
            {reacts.map((react, index) => (
              <div key={index}>
                <img
                  className="reactImg"
                  src={require(`../../assets/${react}.png`)}
                  alt={react}
                />
              </div>
            ))}
          </div>
        </div>
        <button></button>
      </div>
    </div>
  );
}
