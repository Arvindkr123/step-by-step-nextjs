import { fetchUser } from "../../../../Service/getUser";

export default async function page({ params }) {
  const users = await fetchUser();
  const { userId } = params;
  //   console.log(userId);
  //console.log(users[parseInt(userId) - 1]);
  const userData = users[parseInt(userId) - 1];
  return (
    <div>
      <h3>User Detail Page</h3>
      <article>
        <header>
          <p>User id : {userData.id}</p>
          <p>User name 📛: {userData.name} </p>
          <p>User email ✉ : {userData.email} </p>
        </header>
        <main>
          📞 {userData.phone}
          City 🏙 : {userData.address.city}
        </main>
        <footer>Website : {userData.website}</footer>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const users = await fetchUser();
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
