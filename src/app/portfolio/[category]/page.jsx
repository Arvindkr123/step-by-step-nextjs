import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button";
import Image from "next/image";
const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero
            sed fuga reprehenderit similique. Sequi doloribus itaque pariatur
            veritatis! Quod suscipit error nesciunt accusamus molestias
            consequuntur earum explicabo quasi laborum.
          </p>
          <Button text="See More" url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            className={styles.image}
            src={
              "https://images.pexels.com/photos/16335926/pexels-photo-16335926/free-photo-of-khadro-ling-temple-in-brazil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="example image here"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero
            sed fuga reprehenderit similique. Sequi doloribus itaque pariatur
            veritatis! Quod suscipit error nesciunt accusamus molestias
            consequuntur earum explicabo quasi laborum.
          </p>
          <Button text="See More" url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            className={styles.image}
            src={
              "https://images.pexels.com/photos/14499017/pexels-photo-14499017.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            alt="example image here"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
