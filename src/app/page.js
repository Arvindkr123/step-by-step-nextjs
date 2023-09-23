"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main className={styles.main}>
      <h3>Welcome to Home</h3>
      <button className={styles.btn} onClick={() => navigate("/login")}>
        Login
      </button>
      <button className={styles.btn} onClick={() => navigate("/about")}>
        About
      </button>
      <button className={styles.btn} onClick={() => navigate("/studentList")}>
        Student List
      </button>
    </main>
  );
}
