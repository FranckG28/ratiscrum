"use server";

import { contentList } from "@/content/content-list";
import EventPage from "./EventPage";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";

async function getEvent(slug: string) {
  const article = contentList.find((article) => article.slug === slug);

  if (!article) {
    throw new Error(`Article not found for slug: ${slug}`);
  }

  return article;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getEvent(params.slug);

  const postFile = fs.readFileSync(`./src/content/events/${params.slug}.mdx`);

  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog post file
  const mdxSource = await serialize(postFile, { parseFrontmatter: true });

  return <EventPage article={article} mdx={mdxSource} />;
}

export async function generateStaticParams() {
  return contentList.map((post) => ({
    slug: post.slug,
  }));
}
