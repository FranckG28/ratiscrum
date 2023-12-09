import { Event } from "@/models/event";
import getEventMembers from "./getEventMembers";
import getEventPreview from "./getEventPreview";

export default async function getEvent(slug: string): Promise<{
    event: Event;
    mdx: any;
}> {

    const { event, mdx } = await getEventPreview(slug);

    const members = await getEventMembers(mdx.frontmatter.members);

    console.log(members);

    // todo : get rewards
    // todo : get images
    // todo : get participants

    return {
        event: {
            ...event,
            members,
        } as unknown as Event,
        mdx,
    };
}