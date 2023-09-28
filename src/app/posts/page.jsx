import { fetchAllPosts } from "@/utils/feature";

export const metadata = {
  title: "Posts",
};

const page = async () => {
  const posts = await fetchAllPosts();
  //console.log(posts);
  return (
    <div>
      all posts here
      {posts.map((i) => {
        return (
          <div key={i.id}>
            <br />
            {i.title} <br />
          </div>
        );
      })}
    </div>
  );
};

export default page;
