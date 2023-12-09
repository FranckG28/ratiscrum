"use server";

import fs from "fs";
import { eventsPath } from "../config";

export async function getAllSlugs(): Promise<string[]> {

    return fs.readdirSync(eventsPath, { withFileTypes: true })
        .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.mdx'))
        .map((dirent) => dirent.name.replace('.mdx', ''));
}