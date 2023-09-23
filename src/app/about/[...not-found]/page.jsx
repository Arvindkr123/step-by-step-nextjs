import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>This is page is not avaible </h1>
        <br />
        <p>
          <Link href={"/"}>click here to go home page</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
