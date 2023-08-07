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

  static async getSinglePost(id: string): Promise<Post> {
    try {
      const response = await fetch(`http://localhost:3000/api/posts/${id}`);
      const data = await response.json();

      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default PostsClient;
