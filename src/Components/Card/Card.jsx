import React from "react";
import "./Card.css";

export default function Card({ item }) {
  const { img, name, comment, daysAgo, likeCounter, reacts } = item;

  return (
    <div className="cardContainer">
      <div>
        <img className="cardImg" src={img} alt={name} />
      </div>

      <div className="cardItem">
        <div className="content">
          <h3 className="cardName">{name}</h3>
          <p className="cardComment">{comment}</p>
          <button></button>
        </div>

        <div className="cardBottomItem">
          <div className="cardBottomRightItem">
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
            <p className="likeCounter">{likeCounter}</p>
          </div>

          <div className="cardBottomLeftItem">
            <p>Me gusta</p>
            <p>Responder</p>
            <p>{daysAgo} min</p>
          </div>
        </div>
      </div>
    </div>
  );
}
