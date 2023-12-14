"use server";

import EventPage from "./EventPage";
import { getAllSlugs } from "../actions/getAllSlugs";
import getEvent from "../actions/getEvent";
import { Metadata, ResolvingMetadata } from "next";
import { defaultOg } from "../config";
import { appName, appUrl } from "../manifest";
import { fileExists } from "../actions/files";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const { mdx, event } = await getEvent(params.slug);

  return <EventPage article={event} mdx={mdx} />;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs;
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slugs = await getAllSlugs();

  const slug = params.slug;

  if (!slugs.includes(slug)) {
    return notFound();
  }

  const { event } = await getEvent(slug);

  let ogImagePath = `/events/${slug}/og.png`;

  if (await fileExists(`./public${ogImagePath}`)) {
    ogImagePath = defaultOg;
  }

  const previousMetadata = await parent;
  const previousImages = previousMetadata.openGraph?.images || [];

  const title = `${event.name} - ${appName}`;

  return {
    ...previousImages,
    title,
    description: event.excerpt,
    keywords: [appName, "nuit de l'info", ...(event.tags ?? [])],
    creator: appName,
    publisher: appName,
    openGraph: {
      title,
      description: event.excerpt,
      url: `${appUrl}/${slug}`,
      siteName: appName,
      images: previousImages,
      locale: "fr_FR",
      type: "article",
    },
  };
}
