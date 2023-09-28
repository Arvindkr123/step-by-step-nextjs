import { fetchPosts } from "@/utils/feature";
import React from "react";

const Posts = async ({ id }) => {
  const posts = await fetchPosts(id);
  //console.log(posts);
  return (
    <div>
      {posts.map((i) => {
        return <p key={i.id}>{i.title}</p>;
      })}
    </div>
  );
};

export default Posts;
