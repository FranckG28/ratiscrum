"use server";

import { contentList } from "@/content/content-list";
import EventPage from "./EventPage";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { Event } from "@/models/event";

async function getEvent(slug: string) {
  const article = contentList.find((article) => article.slug === slug);

  if (!article) {
    throw new Error(`Article not found for slug: ${slug}`);
  }

  return article;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const postFile = fs.readFileSync(`./src/content/events/${params.slug}.mdx`);

  const article = await getEvent(params.slug);

  const mdxSource = await serialize(postFile, { parseFrontmatter: true });

  if (!mdxSource) {
    throw new Error(`Invalid MDX source for article: ${params.slug}`);
  }

  const time = Date.parse(mdxSource.frontmatter.date as string);

  if (!time) {
    throw new Error(`Invalid date for article: ${params.slug}`);
  }

  return (
    <EventPage
      article={
        {
          ...mdxSource.frontmatter,
          date: new Date(time),
        } as unknown as Event
      }
      mdx={mdxSource}
    />
  );
}

export async function generateStaticParams() {
  return contentList.map((post) => ({
    slug: post.slug,
  }));
}
