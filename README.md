# Catch all Segment

```javascript
"use client";
import React from "react";

export default function Lecture({ params }) {
  //console.log(params);
  const { lecture } = params;
  return (
    <div>
      lecture here of your collges
      <ul>
        {lecture.map((lec) => {
          return <li>{lec}</li>;
        })}
      </ul>
    </div>
  );
}
```
