"use client";

import Post from "../entities/post/Post";
import PostProps from "@/interfaces/Post";
import getAllPosts from "@/services/getAllPosts";
import React from "react";
import useSWR from "swr";

const PostsList = () => {
  const { data: posts, isLoading } = useSWR("/api/posts", () => getAllPosts(1));

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <ul className="w-full flex flex-col gap-5">
      {posts.map((post: PostProps) => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
