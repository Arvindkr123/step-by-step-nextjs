import { getAllUsers } from "@/utils/feature";
import Link from "next/link";

export const metadata = {
  title: "Users",
  description: "Arvind K",
};

async function Home() {
  const users = await getAllUsers();
  // console.log(users);
  return (
    <main>
      <h4>Learning SSG and SSR in details</h4>
      {users?.map((i) => {
        return (
          <>
            <br />
            <p key={i.id}>
              <Link href={`/user/${i.id}`}>{i.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </main>
  );
}

export default Home;
