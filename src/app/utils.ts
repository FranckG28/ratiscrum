import * as path from 'path';
import * as fs from 'fs';

export const lookForImage = (filePath: string): string | null => {
    const imageExtensions = ['.jpg', '.jpeg', '.png'];

    for (const extension of imageExtensions) {
        const imagePath = `${filePath}${extension}`;
        if (fs.existsSync(imagePath)) {
            return extension;
        }
    }

    return null;
}