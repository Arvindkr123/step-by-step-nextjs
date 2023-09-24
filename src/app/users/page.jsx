import Image from "next/image";

async function userList() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data.users;
}



export default async function Page() {
    const data = await userList();
    console.log(data)
  return (
    <div>
      <h1>User Name List</h1>
      {
        data.map(user=>{
            return <div>
                <h5>User name : {user.firstName}</h5>
                <img src={user.image}/>
            </div>
        })
      }
    </div>
  );
}
