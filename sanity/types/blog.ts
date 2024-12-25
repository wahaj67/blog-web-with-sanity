import { PortableTextBlock } from "next-sanity";

export type  Author = {
    name:string,
    image:string,
    bio?:string,
    slug:{
        current:string
    },
    _id?:number,
    ref?:number

}

export type Blog = {
    _id:number,
    title:string,
    slug:any,
    metadata:string,
    body:PortableTextBlock[],
    mainImage:any,
    author:Author,
    tags:string[],
    publishedAt:string
}