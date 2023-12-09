"use server";

import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";

export default async function parseMdx(path: string) {

    if (!fs.existsSync(path)) {
        throw new Error(`File not found: ${path}`);
    }

    const postFile = fs.readFileSync(path);

    const mdxSource = await serialize(postFile, { parseFrontmatter: true });

    if (!mdxSource) {
        throw new Error(`Invalid MDX source for file: ${path}`);
    }

    return mdxSource;
}