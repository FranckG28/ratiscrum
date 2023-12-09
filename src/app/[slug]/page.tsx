"use server";

import { contentList } from "@/content/content-list";
import EventPage from "./EventPage";

export async function getEvent(slug: string) {
  const article = contentList.find((article) => article.slug === slug);

  if (!article) {
    throw new Error(`Article not found for slug: ${slug}`);
  }

  return article;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const article = await getEvent(params.slug);

  return <EventPage article={article} />;
}

export async function generateStaticParams() {
  return contentList.map((post) => ({
    slug: post.slug,
  }));
}
