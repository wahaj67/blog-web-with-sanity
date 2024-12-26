import config from "@/sanity/config/client-config";
import { Blog } from "@/sanity/types/blog";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";


const ImageComponent = ({ value, isInline }: any) => {
  if (!value) return null;

  const { width, height } = getImageDimensions(value);
  const imageUrl = urlBuilder(config)
    .image(value)
    .fit("max")
    .auto("format")
    .url();

  if (!imageUrl) return <p>Image could not be loaded</p>;

  return (
    <div className="my-10 overflow-hidden rounded-[15px]">
    <img
      src={imageUrl as string}
      width={width || 600}
      height={height || 400}
      alt={(value.alt as string) || "blog image"}
      loading="lazy"
      
      style={{
        display: isInline ? "inline-block" : "block",
        aspectRatio: width / height,
      }}
    />
  </div>
);
}
const components = {
  types: {
    image: ImageComponent,
  },
};

const RenderBodyContent = ({ post }: { post: Blog }) => {
  return (
    <>
      <PortableText value={post?.body as any} components={components} />
    </>
  );
};

export default RenderBodyContent;
