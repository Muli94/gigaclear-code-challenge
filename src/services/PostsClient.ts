import { Post, PostsList } from "@/src/interfaces/Post";

class PostsClient {
  static async getPosts(): Promise<PostsList> {
    try {
      const response = await fetch(`http://localhost:3000/api/posts`);
      const data = await response.json();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async getSinglePost(postId: string): Promise<Post> {
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${postId}`);
      const data = await response.json();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default PostsClient;
