import Link from "next/link";
import React from "react";
import "./login.css"

const layout = ({ children }) => {
  return (
    <div className="container">
      <ul className="loginMenu">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/login"}>login</Link>
        </li>
        <li>
          <Link href={"/login/StudentLogin"}>loginStudent</Link>
        </li>
        <li>
          <Link href={"/login/TeacherLogin"}>loginTeacher</Link>
        </li>
      </ul>
      <h1>Welcome to Login page</h1>
      {children}
    </div>
  );
};

export default layout;
