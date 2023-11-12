import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Button from "@/components/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam
            consequuntur quisquam harum fugiat neque incidunt cumque repudiandae
            esse molestias a similique, eius soluta dolore dolor deserunt?
            consequuntur quisquam harum fugiat neque incidunt cumque repudiandae
            esse molestias a similique, eius soluta dolore dolor deserunt?
            consequuntur quisquam harum fugiat neque incidunt cumque repudiandae
            esse molestias a similique, eius soluta dolore dolor deserunt?
            <br />
            <br />
            Neque, consectetur delectus! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Nulla, corporis eos minus expedita consequuntur ex
            harum similique, hic maxime dolorem repudiandae laboriosam esse
            harum similique, hic maxime dolorem repudiandae laboriosam esse
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam
            consequuntur quisquam harum fugiat neque incidunt cumque repudiandae
            esse molestias a similique, eius soluta dolore dolor deserunt?
            consequuntur quisquam harum fugiat neque incidunt cumque repudiandae
            esse molestias a similique, eius soluta dolore dolor deserunt?
            <br />
            <br />- Dynamic Website
            <br />- Fast and Handy
            <br />- Mobile Apps
          </p>
          <Button text="contact" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
