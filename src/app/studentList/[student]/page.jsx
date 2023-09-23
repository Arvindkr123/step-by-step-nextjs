"use client"
import React from "react";


const StudentDetails = ({params}) => {
    const {student} = params;
  return (
    <div style={{ margin: "30px " }}>
      <h1>Student Details</h1>
      <p>Student : {student}</p>
    </div>
  );
};

export default StudentDetails;
