import Link from "next/link";
import React from "react";
import { styles } from "./button.module.css";

const Button = ({ text, url, className }) => {
  return (
    <Link href={url}>
      <button
        style={{
          padding: "20px",
          cursor: "pointer",
          backgroundColor: "#53c28b",
          border: "none",
          borderRadius: "5px",
          width: "max-content",
          color: "white",
        }}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
