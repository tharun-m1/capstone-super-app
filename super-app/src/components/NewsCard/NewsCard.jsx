import React from "react";
import styles from "./newscard.module.css";
function NewsCard(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          {props.news ? (
            <img
              style={{ borderRadius: "10px" }}
              width={"100%"}
              height={"100%"}
              src={props.news.urlToImage}
              alt=""
            />
          ) : (
            "loading..."
          )}
          <div className={styles.title}>
            {props.news ? props.news.title : "loading..."}
          </div>
        </div>
        <div className={styles.news}>
          {props.news ? props.news.content : "loading..."}
        </div>
      </div>
    </>
  );
}

export default NewsCard;
