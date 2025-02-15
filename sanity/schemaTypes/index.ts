import { type SchemaTypeDefinition } from 'sanity'
import author from './author'
import category from './category' 
import post from './post'
import blockContent from './blockContent'
import { comment } from './comments'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent,comment],
}