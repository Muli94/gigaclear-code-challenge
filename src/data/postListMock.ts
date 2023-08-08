import { v4 } from "uuid";

import placeholder from "@/public/placeholder.png";
import { MockPost, PostsList } from "@/src/interfaces/Post";

const postsCount = 6;
const postList: PostsList = [];
export const post: MockPost = {
  title: "Upgrading your remote business - Talk",
  type: "Case Study",
  author: "user",
  description:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  location: "Corn Exchange, Witney, Oxfordshire",
  price: "Free",
  category: "event",
  image: placeholder.src,
  content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.<br />
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. </li>
        </ul>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.
    `,
};

for (let i = 0; i < postsCount; i++) {
  postList.push({
    ...post,
    id: v4(),
    date: new Date(),
  });
}

export default postList;
