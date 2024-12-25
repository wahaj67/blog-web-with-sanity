import { createClient } from 'next-sanity'

import { apiVersion,  projectId } from '../env'

 const Client = createClient({
  projectId,
  dataset:"production",
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_KEY,
  perspective:"published" ,

})
export default Client;