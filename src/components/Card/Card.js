import React from "react";
import styles from "./styles.module.css";

const Card = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImgBlock}>
        <img src={props.image} alt="" className={styles.imageWidth} />
      </div>
      <div className={styles.cardDesc}>
        <p className={styles.heading}>{props.heading}</p>
        <p className={styles.desc}>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
