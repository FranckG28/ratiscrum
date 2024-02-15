import { MetadataRoute } from 'next'
import { getAllSlugs } from './actions/getAllSlugs';
import { appUrl } from './manifest';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const slugs = await getAllSlugs();

    return slugs.map((slug) => ({
        url: `${appUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

}