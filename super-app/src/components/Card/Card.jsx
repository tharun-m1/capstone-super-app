import React from "react";
import styles from "./card.module.css";

function Card(props) {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className={styles.cardContainer}
      onClick={props.onClick}
    >
      <span>{props.title}</span>
      <div className={styles.imageContaier}>
        <img
          alt=""
          style={{ width: "100%", height: "100%" }}
          src={props.image}
        />
      </div>
    </div>
  );
}

export default Card;
