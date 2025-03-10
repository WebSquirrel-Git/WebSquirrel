import {FilterPortfolioType} from '@/components/Portfolio/Filter/Filter';
import NemoCoverImage from '@/public/portfolio/nemosportowaprzygoda/cover.svg';
import ATZMCoverImage from '@/public/portfolio/atzmdesign/cover.svg';
import {ProjectLandscapeCardPropsType} from '@/components/Ui/Cards/ProjectLandscapeCard/ProjectLandscapeCard';

interface ProjectType extends ProjectLandscapeCardPropsType {
  orientation: 'landscape' | 'portrait';
}

export const PORTFOLIO_PROJECTS: ProjectType[] = [
  {
    title: 'NEMO Sportowa Przygoda',
    type: 'website',
    orientation: 'landscape',
    typeTitle: 'Strona internetowa',
    mainTechnology: 'NextJs',
    coverImage: NemoCoverImage.src,
    active: false,
    style: 'website',
  },
  {
    title: 'ATZM Design',
    type: 'website',
    orientation: 'landscape',
    typeTitle: 'Strona internetowa',
    mainTechnology: 'WooCommerce',
    coverImage: ATZMCoverImage.src,
    active: false,
    style: 'graphic',
  },
];
