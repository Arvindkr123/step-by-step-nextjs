## Events functions and States in NEXT JS

```javascript
"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [name, setName] = useState("Arvind");
  const apple = (item) => {
    // alert(item);
    setName("Thanks");
  };

  function InnerComponent() {
    return <h1>Inner Component</h1>;
  }
  return (
    <main className={styles.main}>
      <h1>Events functions and States in NEXT JS {name}</h1>
      {/* <InnerComponent/> */}
      {InnerComponent()}
      <button className={styles.btn} onClick={() => apple()}>
        Click Me
      </button>
    </main>
  );
}
```
