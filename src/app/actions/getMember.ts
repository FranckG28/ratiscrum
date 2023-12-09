import { Member } from "@/models/member";
import fs from "fs";
import { assetsPath, membersPath } from "../config";
import { lookForImage } from "./files";
import parseMdx from "./parseMdx";

export default async function getMember(slug: string): Promise<Member> {

    const path = `${membersPath}/${slug}.mdx`;

    if (!fs.existsSync(path)) {
        throw new Error(`Member not found: ${path}. You must create the file ${path}.`);
    }

    const mdx = await parseMdx(path);

    if (!mdx) {
        throw new Error(`Invalid MDX source for member: ${slug}. Folder name & mdx file name must be the same.`);
    }

    const imageExtension = await lookForImage(`${assetsPath}members/${slug}`);

    return {
        slug: slug,
        ...mdx.frontmatter,
        avatarUrl: imageExtension ? `/members/${slug}${imageExtension}` : undefined,
    } as unknown as Member;

}