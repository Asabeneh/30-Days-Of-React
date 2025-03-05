import React from "react";
import styles from "./ProfileCard.module.css";
var ProfilePhoto = require('../assets/img/photo.jpg')

const ProfileCard = () => {
  return (
    <div className={styles.container}>
      <img src={ProfilePhoto} alt="Profile Photo" />
      <h1>Diego Baena</h1>
      <p>Frontend Developer</p>
    </div>
  );
};

export default ProfileCard;
