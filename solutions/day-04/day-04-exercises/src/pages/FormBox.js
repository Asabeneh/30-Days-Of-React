import React from "react";
import Button from "./Button";
import Input from "./Input";
import styles from "./Formbox.module.css";

const FormBox = (props) => {
  return (
    <div className={styles.container}>
      <h1>Subscribe</h1>
      <p>Sign up with your email address to receive news and updtates.</p>
      <div className="styles.inputs">
        <Input type="text" placeholder="First name" />
        <Input type="text" placeholder="Last name" />
        <Input type="text" placeholder="Email" />
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default FormBox;
