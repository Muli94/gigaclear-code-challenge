import gigaclearImg from "@/public/gigaclear.png";
import thumbnail from "@/public/placeholder.png";
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
  image: gigaclearImg.src,
  thumbnail: thumbnail.src,
  content: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.<br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.<br /><br />
        <ul style="list-style: circle inside">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. </li>
        </ul>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.<br /><br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus et gravida lorem sagittis et, a magna adipiscing facilisis. Adipiscing nec donec ut nisl cras ipsum in mauri egestas. Nulla sed ut eget montes, aliquet placerat. Pretium consectetur nisl tellus habitant leo eu diam nibh. Sem tortor, nec ultrices nunc faucibus pulvinar.
    `,
};

for (let i = 0; i < postsCount; i++) {
  postList.push({
    ...post,
    // Here should be some kind of uuid v4 instead of iterator, but for this exercise i will leave it like that.
    id: i.toString(),
    date: new Date(2023, 1, i),
  });
}

export default postList;
