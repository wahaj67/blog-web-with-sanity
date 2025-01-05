import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, postSlug } = body;

    // Validate the data
    if (!name || !email || !message || !postSlug) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Prepare the data to create a comment
    const commentData = {
      _type: "comment",
      name,
      email,
      message,
      postSlug,
    };

    // Create the comment in Sanity
    await client.create(commentData);

    return NextResponse.json(
      { success: true, message: "Comment added successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting comment:", error);
    return NextResponse.json(
      { success: false, message: "Error submitting comment" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    // Extract the query parameters
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug");

    // Validate the postSlug
    if (!postSlug) {
      return NextResponse.json(
        { success: false, message: "Post slug is required" },
        { status: 400 }
      );
    }

    // Query to fetch comments from Sanity
    const query = `*[_type == "comment" && postSlug == $postSlug] | order(_createdAt asc) {
      _id,
      name,
      message,
      _createdAt
    }`;
    const comments = await client.fetch(query, { postSlug });

    return NextResponse.json(
      { success: true, comments },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching comments" },
      { status: 500 }
    );
  }
}
