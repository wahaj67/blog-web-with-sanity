import { SchemaTypeDefinition } from 'sanity';

// Post schema
export const post: SchemaTypeDefinition = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title, author, media } = selection
      return {
        title: title || 'No Title',
        subtitle: author ? `by ${author}` : 'Unknown Author',
        media,
      };
    },
  },
};

// Author schema
export const author: SchemaTypeDefinition = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'bio',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle
          ? selection.subtitle.slice(0, 50) + '...'
          : 'No Bio Available',
      };
    },
  },
};

// Category schema
export const category: SchemaTypeDefinition = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'No Category Title',
      };
    },
  },
};

// Block content schema
export const blockContent: SchemaTypeDefinition = {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
    },
  ],
};
