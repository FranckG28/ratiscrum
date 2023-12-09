"use server";

import EventPage from "./EventPage";
import { getAllSlugs } from "../actions/getAllSlugs";
import getEvent from "../actions/getEvent";
import { Metadata, ResolvingMetadata } from "next";
import fs from "fs";
import { defaultOg } from "../config";
import { appName, appUrl } from "../manifest";

export default async function Page({ params }: { params: { slug: string } }) {
  const { mdx, event } = await getEvent(params.slug);

  return <EventPage article={event} mdx={mdx} />;
}

export async function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const { event } = await getEvent(slug);

  let ogImagePath = `/events/${slug}/og.png`;

  if (!fs.existsSync(`./public${ogImagePath}`)) {
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
      url: `${appUrl}${slug}`,
      siteName: appName,
      images: previousImages,
      locale: "fr_FR",
      type: "article",
    },
  };
}
