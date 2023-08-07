export type PostCategory = "event" | "news";

export interface Post {
  id: string;
  title: string;
  description: string;
  author: string;
  date: Date;
  image: string;
  category: PostCategory;
  content: string;
  type: string;
  location?: string;
  price?: string;
}

export type MockPost = Omit<Post, "id" | "date">;

export type PostsList = Post[];
