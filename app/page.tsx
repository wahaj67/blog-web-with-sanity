import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "./components/Blog";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="py-5">
      {posts?.length > 0 ? (
        posts.map((post: any,index:number) => <BlogItem key={post._id|| index} blog={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}