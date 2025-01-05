import { defineType } from "sanity"

export  const comment = defineType( {
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "message",
      type: "text",
      title: "Message",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "postSlug",
      type: "string",
      title: "Post Slug",
      description: "Slug of the blog post this comment belongs to",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At",
      description: "The date and time the comment was created",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 1,
      },
      initialValue: () => new Date().toISOString(), // Automatically add timestamp
    },
  ],
});
