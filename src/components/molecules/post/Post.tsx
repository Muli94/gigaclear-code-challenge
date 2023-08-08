import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import Badge from "@/src/components/atoms/badge/Badge";
import Typography from "@/src/components/atoms/typography/Typography";
import { Post as PostType } from "@/src/interfaces/Post";

interface PostProps extends Omit<PostType, "content" | "title" | "location" | "price"> {}

const Post: React.FC<PostProps> = ({ date, id, image, type, category, author, description }) => {
  return (
    <div className="w-[344px] p-3 rounded-xl">
      <Link href={`/posts/${id}`}>
        <div className="flex flex-col gap-3">
          <Image width={344} height={241} loading="lazy" src={image} alt="Post image" />
          <Typography color="secondary" variant="h5">
            {type}
          </Typography>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Badge>{category}</Badge>
              <Badge>{author}</Badge>
            </div>
            <Badge>{format(new Date(date), "dd MMM yyyy")}</Badge>
          </div>
          <Typography className="font-bold" variant="body1" color="secondary">
            {description}
          </Typography>
        </div>
      </Link>
    </div>
  );
};

export default Post;
