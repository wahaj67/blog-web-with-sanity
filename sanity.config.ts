'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId, title} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

const config = defineConfig({
  projectId: projectId,
  dataset: dataset,
  title: title,
  apiVersion: apiVersion,
  basePath: '/admin',
  plugins:[structureTool()],
  schema: {types: schema.types},

})

export default config