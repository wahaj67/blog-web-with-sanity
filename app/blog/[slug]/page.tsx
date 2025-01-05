import React from "react";
import { getPostBySlug } from "@/sanity/sanity-utils";
import RenderBodyContent from "@/app/components/Blog/RenderBodyContent";
import CommentForm from "@/app/components/Blog/commentForm";
import CommentList from "@/app/components/CommentList";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const SingleBlogPage = async ({ params }: { params: any }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  console.log(post?.body,"jjjjjjj")

  return (
    <article className="max-w-4xl mx-auto p-4 sm:p-8 lg:p-12 bg-gray-200 shadow-lg rounded-lg overflow-hidden space-y-8">
     
      <div className="mb-8 border-b border-gray-300 pb-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight break-words">{post?.title}</h1>
        <div className="text-sm text-gray-600 mt-2">
          <div className="break-words">
            <strong>Published:</strong> {new Date(post?.publishedAt)?.toDateString()}
          </div>
          <div className="break-words mt-1">
            <strong>Author:</strong> {post?.author?.name}
          </div>
        </div>
        <p className="mt-4 text-lg text-gray-500 break-words">{post?.metadata}</p>
      </div>

        <Image
          src={urlFor(post?.mainImage).url()}
          width={500}
          height={300}
          alt={post?.title}
          className="object-cover"
        />
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-gray max-w-none space-y-6">
        <RenderBodyContent post={post} />
      </div>
      <CommentForm postSlug={post?.slug?.current} />
      <CommentList postSlug={post?.slug?.current} />
    </article>
  );
};

export default SingleBlogPage;
