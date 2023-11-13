import React from "react";
import styles from "./blogDetails.module.css";
import Image from "next/image";
import NotFound from "next/navigation";

async function getData(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?id=${id}`,
    // {next: { revalidate: 10 },}
    { cache: "no-store" }
  );

  if (!res.ok) {
    return NotFound();
  }

  return res.json();
}

const BlogDetails = async ({ params }) => {
  const data = await getData(Number(params.id));
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data[0].title}</h1>
          <p className={styles.desc}>{data[0].body}</p>
          <div className={styles.author}>
            <Image
              width={40}
              height={40}
              alt=""
              src="https://images.pexels.com/photos/18954671/pexels-photo-18954671/free-photo-of-pink-lotus-on-the-water-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className={styles.avtar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/18954671/pexels-photo-18954671/free-photo-of-pink-lotus-on-the-water-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            className={styles.image}
            fill={true}
          />
        </div>
      </div>
      <div style={{ color: "#bbb" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        reprehenderit, eveniet deserunt repellat necessitatibus atque ullam nam
        a eum, culpa eius, iusto rem doloribus excepturi quas est quasi
        accusantium ut! Lorem, ipsum dolor sit amet consectetur adipisicing
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        reprehenderit, eveniet deserunt repellat necessitatibus atque ullam nam
        a eum, culpa eius, iusto rem doloribus excepturi quas est quasi
        accusantium ut! Lorem, ipsum dolor sit amet consectetur adipisicing
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        reprehenderit, eveniet deserunt repellat necessitatibus atque ullam nam
        a eum, culpa eius, iusto rem doloribus excepturi quas est quasi
        accusantium ut! Lorem, ipsum dolor sit amet consectetur adipisicing
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        reprehenderit, eveniet deserunt repellat necessitatibus atque ullam nam
        a eum, culpa eius, iusto rem doloribus excepturi quas est quasi
        accusantium ut! Lorem, ipsum dolor sit amet consectetur adipisicing
        <br />
        <br />
        elit. Vel maxime voluptatibus quibusdam ipsa quae. Consequuntur iusto
        ipsam iure nisi architecto adipisci corrupti magni, fugit deserunt. Fuga
        sed quaerat cupiditate aliquid.
      </div>
    </div>
  );
};

export default BlogDetails;
