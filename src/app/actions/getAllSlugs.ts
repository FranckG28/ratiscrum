"use server";

import fs from "fs";
import { eventsPath } from "../config";

export async function getAllSlugs(): Promise<string[]> {

    return fs.readdirSync(eventsPath, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .filter((dirent) => fs.readdirSync(`${eventsPath}/${dirent.name}`).some(file => file.endsWith('.mdx')))
        .map((dirent) => dirent.name);
}