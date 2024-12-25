import { type SchemaTypeDefinition } from 'sanity'
import {post} from './post'
import {author} from './post'
import {category} from './post'
import {blockContent} from './post'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,author, category,blockContent]

}
