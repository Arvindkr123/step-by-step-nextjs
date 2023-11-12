import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://www.pexels.com/photo/photo-of-people-using-laptops-3194521/"
          }
          fill={true}
          alt="meeting image"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
