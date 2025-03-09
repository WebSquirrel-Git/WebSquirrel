import Hero from '@/components/OfferPage/Hero/Hero';
import IconListRow from '@/components/OfferPage/IconListRow/IconListRow';
import ProcessSteps from '@/components/OfferPage/ProcessSteps/ProcessSteps';
import {SINGLE_PAGE_CONTENT} from '@/utils/offer/singlePage';

export default function SinglePage() {
  return (
    <>
      <Hero {...SINGLE_PAGE_CONTENT.hero} />
      <IconListRow
        title={SINGLE_PAGE_CONTENT.assumptions.title}
        icon={SINGLE_PAGE_CONTENT.assumptions.icon}
        list={SINGLE_PAGE_CONTENT.assumptions.list}
      />
      <IconListRow
        title={SINGLE_PAGE_CONTENT.priceIncludes.title}
        icon={SINGLE_PAGE_CONTENT.priceIncludes.icon}
        list={SINGLE_PAGE_CONTENT.priceIncludes.list}
      />
      <IconListRow
        title={SINGLE_PAGE_CONTENT.priceNotIncludes.title}
        icon={SINGLE_PAGE_CONTENT.priceNotIncludes.icon}
        list={SINGLE_PAGE_CONTENT.priceNotIncludes.list}
      />
      <IconListRow
        title={SINGLE_PAGE_CONTENT.technologies.title}
        icon={SINGLE_PAGE_CONTENT.technologies.icon}
        list={SINGLE_PAGE_CONTENT.technologies.list}
      />
      <ProcessSteps />
    </>
  );
}
