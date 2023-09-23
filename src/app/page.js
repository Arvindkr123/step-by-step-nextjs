import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <Link href={"/productList"}>go to product</Link>
    </div>
  );
};

export default Home;
