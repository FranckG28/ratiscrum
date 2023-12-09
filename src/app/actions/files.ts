"use server";

import * as path from 'path';
import fs from "fs";
import { imageExtensions } from '../config';

export async function lookForImage(filePath: string): Promise<string | null> {

    for (const extension of imageExtensions) {
        const imagePath = `.${filePath}${extension}`;
        if (fs.existsSync(imagePath)) {
            return extension;
        }
    }

    return null;
}

export async function imagesInFolder(folderPath: string): Promise<string[]> {

    const images: string[] = [];

    const dirContent = fs.readdirSync(folderPath);

    for (const file of dirContent) {
        const fileExtension = path.extname(file);
        if (imageExtensions.includes(fileExtension)) {
            const filePath = `${folderPath}${file}`.replace('./public', '');
            images.push(filePath);
        }
    }

    return images;
}
