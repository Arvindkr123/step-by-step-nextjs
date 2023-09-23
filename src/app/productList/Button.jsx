"use client";
import React from "react";

const Button = ({ price, children }) => {
  return <button style={{padding:"5px", margin:"5px"}} onClick={() => alert(price)}>{children}</button>;
};

export default Button;
