import React from "react";
import styles from "./filter.module.css";

function Filter(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.genere}>{props.title}</div>
        <div onClick={props.onClick} className={styles.cross}>
          X
        </div>
      </div>
    </>
  );
}
export default Filter;
