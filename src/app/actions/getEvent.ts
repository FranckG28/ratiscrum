import { Event } from "@/models/event";
import { assetsPath } from "../config";
import { imagesInFolder } from "./files";
import getEventMembers from "./getEventMembers";
import getEventPreview from "./getEventPreview";

export default async function getEvent(slug: string): Promise<{
    event: Event;
    mdx: any;
}> {

    const { event, mdx } = await getEventPreview(slug);

    const members = await getEventMembers(mdx.frontmatter.members);

    const galleryImages = await imagesInFolder(`${assetsPath}events/${slug}/gallery/`);
    const projectImages = await imagesInFolder(`${assetsPath}events/${slug}/project/`);

    return {
        event: {
            ...event,
            members,
            galleryImages,
            projectImages,
        } as unknown as Event,
        mdx,
    };
}