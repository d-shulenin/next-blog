import PostProps from "@/interfaces/Post";
import Image from "next/image";
import React from "react";

const Post = ({ title, body }: PostProps) => {
  return (
    <div className="rounded-2xl bg-white sm:px-5 sm:py-6 flex sm:gap-5 sm:flex-row flex-col">
      <div className="flex-1 sm:flex-[2] px-5 py-6 sm:px-0 sm:py-0">
        <p className="text-sm text-[#667085] uppercase sm:mb-6 mb-4">
          August 13, 2021{" "}
        </p>
        <h1 className="text-2xl line-clamp-2 font-semibold text-[#1D2939] mb-0 sm:mb-3">
          {title}
        </h1>
        <h2 className="text-lg text-[#475467] font-normal hidden sm:line-clamp-3">
          {body}
        </h2>
      </div>
      <div className="flex-1 rounded-b-2xl rounded-t-none sm:rounded-t-2xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
          className="object-cover w-full h-full"
          width={400}
          height={400}
          alt="post image"
        ></Image>
      </div>
    </div>
  );
};

export default Post;
