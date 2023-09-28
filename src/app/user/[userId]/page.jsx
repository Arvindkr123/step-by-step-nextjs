import Posts from "@/components/Posts";
import { getSignleUser } from "@/utils/feature";
import { Suspense } from "react";

export const generateMetadata = async ({ params }) => {
  const { userId } = params;
  const user = await getSignleUser(parseInt(userId));
  return {
    title: `${user.name}'s profile`,
  };
};

export const dynamicParams = false;

//these 4 id will be generate SSG
export const generateStaticParams = () => {
  return [{ userId: "1" }, { userId: "2" }, { userId: "3" }, { userId: "4" }];
};

const UserDetails = async ({ params }) => {
  const { userId } = params;
  const user = await getSignleUser(parseInt(userId));

  return (
    <div>
      <h4>User Details Page here.....</h4>
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
      </ul>
      <br />
      <p>About user posts details </p>
      <br />
      <Suspense fallback={<div>Loding........</div>}>
        <Posts id={userId} />
      </Suspense>
    </div>
  );
};

export default UserDetails;
