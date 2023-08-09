"use client";

import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Image from "next/image";
import { useParams } from "next/navigation";
import ReactHtmlParser from "react-html-parser";

import Button from "@/src/components/atoms/button/Button";
import Typography from "@/src/components/atoms/typography/Typography";
import PostsClient from "@/src/services/PostsClient";

function PostDetails(): JSX.Element {
  const { postId } = useParams();
  const { data } = useQuery({
    queryKey: ["post", `${postId}`],
    queryFn: () => PostsClient.getSinglePost(postId as string),
  });

  function renderPostDetails(): JSX.Element {
    if (!data) {
      return (
        <Typography color="primary" variant="h4">
          We are sorry. Post details cannot be displayed.
        </Typography>
      );
    }

    return (
      <div className="flex justify-center flex-col items-center">
        <div className="flex flex-col justify-center items-center gap-6">
          <Typography variant="h1" color="primary" fontWeight="bold" className="text-5xl md:text-8xl text-center">
            {data?.title}
          </Typography>
          <Typography variant="body1" color="secondary" fontWeight="bold" className="text-center md:w-3/6">
            {data?.description}
          </Typography>
          <Typography variant="body2" color="grey" fontWeight="bold">
            {format(new Date(data?.date), "dd MMM yyyy")}
          </Typography>
        </div>
        <div className="w-full relative h-[200px] md:h-[500px] my-8">
          <Image src={data.image} alt="Event" fill loading="lazy" />
        </div>
        <div className="flex justify-between flex-wrap w-full gap-4 md:gap-0">
          <div className="flex flex-col">
            <div className="">
              <Typography variant="body1" color="secondary" fontWeight="bold">
                {data.location}
              </Typography>
            </div>
            <div className="flex justify-between">
              <Typography variant="body1" color="primary" fontWeight="bold">
                {data.price}
              </Typography>
              <Typography variant="body1" color="primary" fontWeight="bold">
                {format(new Date(data.date), "HH:MM | dd MMM yyyy")}
              </Typography>
            </div>
          </div>
          {data.category === "event" ? (
            <div>
              <Button>Sign up to this event</Button>
            </div>
          ) : null}
        </div>

        <div className="mt-4 md:w-4/6">
          <Typography variant="h4" color="primary" fontWeight="bold" className="my-4 text-2xl md:text-4xl">
            About this event
          </Typography>
          <div className="text-sm md:text-base font-bold color-[#000]">{ReactHtmlParser(data.content)}</div>
        </div>
      </div>
    );
  }

  return <>{renderPostDetails()}</>;
}

export default PostDetails;
