import { API_BASE_URL } from "../Config/constants";
const Home = () => {
  console.log(process.env.SERVER_PASSWORD);
  return (
    <main>
      <h1>Enviornment Variables in Next Js</h1>
      {process.env.NODE_ENV === "development" ? (
        <h3>You are in development Mode</h3>
      ) : (
        <h3>You are in production Mode</h3>
      )}

      <p>**********************************************</p>
      {API_BASE_URL}
    </main>
  );
};

export default Home;
