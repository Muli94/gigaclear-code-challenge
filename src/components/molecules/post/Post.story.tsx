import { v4 } from "uuid";

import Post from "@/src/components/molecules/post/Post";
import { post as postData } from "@/src/data/postListMock";

export default {
  component: Post,
  title: "Surfaces/Post",
  tags: ["autodocs"],
};

export const Default = (): React.ReactNode => {
  return (
    <div className="w-full">
      <Post
        id={v4()}
        author={postData.author}
        image={postData.image}
        description={postData.description}
        category={postData.category}
        date={new Date()}
        type={postData.type}
      />
    </div>
  );
};
