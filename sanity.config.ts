'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId, title} from './sanity/env'

import {structure} from './sanity/structure'
import {schema} from './sanity/schemaTypes'
import { codeInput } from '@sanity/code-input';
import { table } from '@sanity/table';
const config = defineConfig({
  projectId,
  dataset,
  title,
 
  basePath: '/studio',
  schema,
  plugins:[structureTool({structure}),
    
    visionTool({defaultApiVersion: apiVersion}),
    codeInput()],
 

})

export default config