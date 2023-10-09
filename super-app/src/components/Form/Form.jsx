import React from "react";
import styles from "./form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [validMobile, setValidMobile] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  //handlers
  const handleNameChange = (e) => {
    setName(e.target.value);
    let strNaam = e.target.value;

    if (strNaam.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    let strUserName = e.target.value;
    if (strUserName.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    let strEmail = e.target.value;
    if (strEmail.length === 0) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const handleMobileChange = (e) => {
    setMobile(e.target.value);
    let strMobile = e.target.value;
    if (strMobile.length < 10) {
      setError(true);
      setValidMobile(false);
    } else {
      setError(false);
      setValidMobile(true);
    }
  };
  const handleCheckBox = (e) => {
    setIsChecked(e.target.checked);
  };

  // SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      userName.length === 0 ||
      email.length === 0 ||
      mobile.length === 0
    ) {
      setError(true);
    }
    if (mobile.length === 10) {
      setValidMobile(true);
      if (isNaN(mobile)) {
        setValidMobile(false);
      }
    } else {
      setValidMobile(false);
    }

    if (error === false && validMobile === true && isChecked === true) {
      const details = {
        Name: name,
        UserName: userName,
        Email: email,
        Mobile: mobile,
      };
      localStorage.setItem("details", JSON.stringify(details));
      localStorage.setItem("authenticated", true);
      navigate("categories");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputArea}>
          <div>
            <input onChange={handleNameChange} placeholder="Name" />
            <br />
            {error && !name ? <label>Field is required</label> : ""}
          </div>
          <div>
            <input onChange={handleUserNameChange} placeholder="UserName" />
            <br />
            {error && !userName ? <label>Field is required</label> : ""}
          </div>
          <div>
            <input
              onChange={handleEmailChange}
              type="email"
              placeholder="Email"
            />
            <br />
            {error && !email ? <label>Field is required</label> : ""}
          </div>
          <div>
            <input
              type="text"
              maxLength={10}
              onChange={handleMobileChange}
              placeholder="Mobile"
            />
            <br />
            {error && !mobile ? <label>Field is required</label> : ""}
            {!validMobile ? <label>Invalid Mobile</label> : ""}
          </div>
        </div>
        <div className={styles.check}>
          <input onChange={handleCheckBox} type="checkbox" />
          <label>Share my registration data with Superapp</label>
        </div>
        <div className={styles.signUpBtn}>
          <button type="submit">SIGN UP</button>
        </div>
        <div style={{ marginTop: "17px" }}>
          <span className={styles.txt}>
            By clicking on Sign up. you agree to Superapp
          </span>
          <span className={styles.terms}>
            {" "}
            Terms and <br /> Conditions of Use
          </span>
        </div>
        <div style={{ marginTop: "16px" }}>
          <span className={styles.txt}>
            To learn more about how Superapp collects, uses, shares and <br />{" "}
            protects your personal data please head Superapp
          </span>

          <span className={styles.terms}>
            Privacy <br />
            Policy
          </span>
        </div>
      </form>
    </>
  );
}
export default Form;
