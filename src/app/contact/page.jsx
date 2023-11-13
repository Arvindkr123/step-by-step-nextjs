import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import Button from "@/components/Button";
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            alt="contact image"
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="name" />
          <input className={styles.input} type="email" placeholder="email" />
          <textarea className={styles.textArea} cols="30" rows="10"></textarea>
          <Button url="#" text={"Send"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
