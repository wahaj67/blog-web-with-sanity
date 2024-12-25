import { ClientPerspective } from "next-sanity";
import { apiVersion,  } from "../env";

export const config ={
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||"",
 
    dataset:"production",
    apiVersion,
    useCdn:false,
    token: process.env.SANITY_API_KEY,
    perspective: 'published' as ClientPerspective

}