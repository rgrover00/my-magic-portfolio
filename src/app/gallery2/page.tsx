import { Flex, Meta, Schema } from "@once-ui-system/core";
import MasonryGrid2 from "@/components/gallery/MasonryGrid2";
import { baseURL, gallery2, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery2.title,
    description: gallery2.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery2.title)}`,
    path: gallery2.path,
  });
}

export default function Gallery2() {
  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery2.title}
        description={gallery2.description}
        path={gallery2.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery2.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery2.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <MasonryGrid2 images={gallery2.images} />
    </Flex>
  );
}
