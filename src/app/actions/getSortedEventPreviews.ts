import { getAllSlugs } from "./getAllSlugs";
import getEventPreview from "./getEventPreview";

export default async function getSortedEventPreviews() {
    const slugs = await getAllSlugs();

    const allEvents = await Promise.all(
        slugs.map(async (slug) => {
            const { event } = await getEventPreview(slug);
            return event;
        })
    );

    return allEvents.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}