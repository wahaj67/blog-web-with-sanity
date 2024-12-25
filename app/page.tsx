import { getPosts } from "@/sanity/sanity-utils";
import BlogItem from "@/app/components/Blog/page";

export default async function Home() {
  const posts = await getPosts(); // Fetch posts from Sanity
  console.log(posts, "posts"); // Debug posts data

  return (
    <div className="py-5">
      {posts?.length > 0 ? (
        posts.map((post: any, index: number) => (
          <BlogItem key={post?._id || index} blog={post} />
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}
