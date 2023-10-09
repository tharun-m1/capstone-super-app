import React from "react";
import styles from "./banner.module.css";
function Banner(props) {
  return <div className={styles.container}>{props.genere}</div>;
}

export default Banner;
