# Conditional Layout

```javascript
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./login.css";

const layout = ({ children }) => {
  const currentPath = usePathname();
  //console.log(currentPath);
  const arr = ["/login/StudentLogin", "/login/TeacherLogin"];
  const isAnyMatch = arr.some((ele) => currentPath === ele);
  //console.log(isAnyMatch);

  return (
    <div className="container">
      {!isAnyMatch ? (
        <ul className="loginMenu">
          <li>
            <h4>Login Navbar</h4>
          </li>
          <li>
            <Link href={"/login"}>Login Main</Link>
          </li>
          <li>
            <Link href={"/login/StudentLogin"}>Student Login</Link>
          </li>
          <li>
            <Link href={"/login/TeacherLogin"}>Teacher Login</Link>
          </li>
        </ul>
      ) : (
        <Link href={"/login"}>back to login page</Link>
      )}

      {children}
    </div>
  );
};

export default layout;
```
