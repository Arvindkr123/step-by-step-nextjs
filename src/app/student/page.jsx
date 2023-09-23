import React from "react";

const page = () => {
  return (
    <div>
      <h1>Student Page is here</h1>
    </div>
  );
}; 

export function generateMetadata({ params }) {
  return {
    title: "Student Page",
    desciption: "This is student feedback bage",
  };
}

export default page;
