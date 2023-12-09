"use server";

import { promises as fs } from 'fs';
import { serialize } from "next-mdx-remote/serialize";
import { fileExists } from "./files";

export default async function parseMdx(path: string) {

    if (!await fileExists(path)) {
        throw new Error(`File not found: ${path}`);
    }

    const postFile = await fs.readFile(`${process.cwd()}${path}`);

    const mdxSource = await serialize(postFile, { parseFrontmatter: true });

    if (!mdxSource) {
        throw new Error(`Invalid MDX source for file: ${path}`);
    }

    return mdxSource;
}