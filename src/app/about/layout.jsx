import Link from "next/link";
import React from "react";
import './about.css'

const layout = ({ children }) => {
  return (
    <div>
      <ul className="loginMenu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/aboutCollege">About College</Link>
        </li>
        <li>
          <Link href="/about/aboutStudent">About Student</Link>
        </li>
      </ul>
      <h1>Welcome to About Page</h1>
      {children}
    </div>
  );
};

export default layout;
