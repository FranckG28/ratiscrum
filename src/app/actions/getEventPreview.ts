import { EventPreview } from "@/models/event-preview";
import { notFound } from "next/navigation";
import { eventsPath } from "../config";
import { fileExists } from "./files";
import parseMdx from "./parseMdx";

export default async function getEventPreview(slug: string): Promise<{
    event: EventPreview;
    mdx: any;
}> {

    const path = `${eventsPath}${slug}.mdx`;

    if (!await fileExists(path)) {
        return notFound();
    }

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
            rewardsCount: (mdxSource.frontmatter.rewards as [] ?? []).length,
        } as unknown as EventPreview,
        mdx: mdxSource,
    };
}