"use server";

import { eventsPath } from "../config";
import { getFileList } from "./files";

export async function getAllSlugs(): Promise<string[]> {

    const files = await getFileList(eventsPath)

    return files
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => file.replace('.mdx', ''));
}