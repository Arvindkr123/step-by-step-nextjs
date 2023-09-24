import Link from "next/link";
import { fetchUser } from "../../../Service/getUser";

export default async function page() {
  const getUserList = await fetchUser();
  //console.log(getUserList);
  return (
    <div>
      <h2>User List</h2>
      {getUserList.map((user) => {
        return (
          <p key={user.id}>
            <br />
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        );
      })}
    </div>
  );
}

