import {MetadataRoute} from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://websquirrel.pl/',
    },
    {
      url: 'https://websquirrel.pl/oferta/',
    },
    {
      url: 'https://websquirrel.pl/oferta/strony-internetowe/',
    },
    {
      url: 'https://websquirrel.pl/oferta/sklepy-internetowe/',
    },
    {
      url: 'https://websquirrel.pl/oferta/strony-internetowe/woocommerce/',
    },
    {
      url: 'https://websquirrel.pl/oferta/strony-internetowe/creative/',
    },
    {
      url: 'https://websquirrel.pl/oferta/strony-internetowe/premium/',
    },
    {
      url: 'https://websquirrel.pl/oferta/strony-internetowe/singlepage/',
    },
    {
      url: 'https://websquirrel.pl/oferta/strony-internetowe/standard/',
    },
    {
      url: 'https://websquirrel.pl/portfolio/',
    },
    {
      url: 'https://websquirrel.pl/artykuly/',
    },
    {
      url: 'https://websquirrel.pl/artykuly/optymalizacjaobrazow/',
    },
    {
      url: 'https://websquirrel.pl/artykuly/korzysci-plynace-z-posiadania-sklepu-internetowego/',
    },
    {
      url: 'https://websquirrel.pl/artykuly/rola-naglowkow-na-stronie-internetowej/',
    },
    {
      url: 'https://websquirrel.pl/artykuly/dlaczego-warto-miec-strone-www/',
    },
  ];
}
