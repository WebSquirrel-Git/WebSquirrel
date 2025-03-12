import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/contact'],
      },
    ],
    sitemap: 'https://websquirrel.pl/sitemap.xml',
  };
}
