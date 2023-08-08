"use client";

import { useQuery } from "@tanstack/react-query";

import Typography from "@/src/components/atoms/typography/Typography";
import Post from "@/src/components/molecules/post/Post";
import PostsClient from "@/src/services/PostsClient";

function PostList(): JSX.Element {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: PostsClient.getPosts });

  function renderPosts(): JSX.Element[] | JSX.Element {
    if (!data) {
      return (
        <Typography color="primary" variant="h4">
          We are sorry. We have not publish any posts yet.
        </Typography>
      );
    }

    return data.map(({ date, id, thumbnail, type, category, author, description }) => {
      return <Post key={id} {...{ id, date, thumbnail, type, category, author, description }} />;
    });
  }

  return <div className="flex flex-wrap justify-center md:justify-between">{renderPosts()}</div>;
}

export default PostList;
