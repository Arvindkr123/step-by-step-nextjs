import styles from "./page.module.css";
import Hero from "../../public/hero.png";
import Image from "next/image";
import Button from "../components/Button.jsx";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button text={"see our works"} url={"/protfolio"}></Button>
      </div>
      <div className={styles.item}>
        <Image
          alt="hero image"
          className={styles.img}
          // src={"https://www.pexels.com/photo/paper-bag-18362146/"}
          src={Hero}
        />
      </div>
    </div>
  );
};

export default Home;
