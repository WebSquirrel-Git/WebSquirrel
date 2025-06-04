import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/assets/statues/WebSquirrel_Polityka_prywatności.pdf'],
      },
    ],
    sitemap: 'https://websquirrel.pl/sitemap.xml',
  };
}
