import { EventPreview } from "@/models/event-preview";
import { eventsPath } from "../config";
import parseMdx from "./parseMdx";

export default async function getEvent(slug: string): Promise<{
    event: EventPreview;
    mdx: any;
}> {

    const path = `${eventsPath}/${slug}/${slug}.mdx`;

    const mdxSource = await parseMdx(path);

    if (!mdxSource) {
        throw new Error(`Invalid MDX source for article: ${slug}. Folder name & mdx file name must be the same.`);
    }

    const time = Date.parse(mdxSource.frontmatter.date as string);

    if (!time) {
        throw new Error(`Invalid date for article: ${slug}. Expected format: YYYY-MM-DD.`);
    }

    return {
        event: {
            slug: slug,
            ...mdxSource.frontmatter,
            date: new Date(time),
        } as unknown as EventPreview,
        mdx: mdxSource,
    };
}