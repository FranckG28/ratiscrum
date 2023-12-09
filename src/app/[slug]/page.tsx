"use server";

import EventPage from "./EventPage";
import { getAllSlugs } from "../actions/getAllSlugs";
import getEvent from "../actions/getEvent";

export default async function Page({ params }: { params: { slug: string } }) {
  const { mdx, event } = await getEvent(params.slug);

  return <EventPage article={event} mdx={mdx} />;
}

export async function generateStaticParams() {
  return getAllSlugs();
}
