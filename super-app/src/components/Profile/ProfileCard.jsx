import React from "react";
import styles from "./profilecard.module.css";
import ProfileImage from "../../assets/profileImage.png";
import Banner from "../Profile/Banner";
function ProfileCard() {
  const details = JSON.parse(localStorage.getItem("details"));
  const generes = JSON.parse(localStorage.getItem("generes"));

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imageSection}>
          <img
            style={{ marginTop: "8.5%", marginLeft: "15%" }}
            width={"58%"}
            height={"90%"}
            src={ProfileImage}
          />
        </div>
        <div className={styles.detailSection}>
          <div className={styles.infoContainer}>
            <div className={styles.name}>{details.Name}</div>
            <div className={styles.email}>{details.Email}</div>
            <div className={styles.username}>{details.UserName}</div>
          </div>
          <div className={styles.genereContainer}>
            {generes.map((item) => (
              <Banner genere={item.genere} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
