import React from "react";
import styles from "./signup.module.css";
import SuperLogo from "../../components/logo/SuperLogo";
import Form from "../../components/Form/Form";
// import { Outlet } from "react-router-dom";
function Signup() {
  return (
    <div>
      <div className={styles.pageContainer}>
        <section className={styles.leftsection}>
          <div className={styles.caption}>
            Discover new things on <br /> Superapp
          </div>
        </section>
        <section className={styles.rightsection}>
          <div className={styles.logo}>
            <SuperLogo />
          </div>
          <label
            style={{
              color: "white",
              marginLeft: "18vw",
              fontFamily: "DM Sans",
            }}
          >
            Create your new account
          </label>
          <div className={styles.frm}>
            <Form />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup;
