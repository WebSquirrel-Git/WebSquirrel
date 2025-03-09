import Assumptions from '@/components/OfferPage/Assumptions/Assumptions';
import Hero from '@/components/OfferPage/Hero/Hero';
import {SINGLE_PAGE_CONTENT} from '@/utils/offer/singlePage';

export default function SinglePage() {
  return (
    <>
      <Hero {...SINGLE_PAGE_CONTENT.hero} />
      <Assumptions assumptions={SINGLE_PAGE_CONTENT.assumptions} />
    </>
  );
}
