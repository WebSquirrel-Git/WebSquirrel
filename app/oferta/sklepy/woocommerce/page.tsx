import ContactForm from '@/components/ContactForm/ContactForm';
import Hero from '@/components/OfferPage/Hero/Hero';
import IconListRow from '@/components/OfferPage/IconListRow/IconListRow';
import ProcessSteps from '@/components/OfferPage/ProcessSteps/ProcessSteps';
import {WOOCOMMERCE_SHOP_CONTENT} from '@/utils/offer/woocommerceShop';

export default function WoocommercePage() {
  return (
    <>
      <Hero {...WOOCOMMERCE_SHOP_CONTENT.hero} />
      <IconListRow
        title={WOOCOMMERCE_SHOP_CONTENT.assumptions.title}
        icon={WOOCOMMERCE_SHOP_CONTENT.assumptions.icon}
        list={WOOCOMMERCE_SHOP_CONTENT.assumptions.list}
      />
      <IconListRow
        title={WOOCOMMERCE_SHOP_CONTENT.priceIncludes.title}
        icon={WOOCOMMERCE_SHOP_CONTENT.priceIncludes.icon}
        list={WOOCOMMERCE_SHOP_CONTENT.priceIncludes.list}
      />
      <IconListRow
        title={WOOCOMMERCE_SHOP_CONTENT.priceNotIncludes.title}
        icon={WOOCOMMERCE_SHOP_CONTENT.priceNotIncludes.icon}
        list={WOOCOMMERCE_SHOP_CONTENT.priceNotIncludes.list}
      />
      <IconListRow
        title={WOOCOMMERCE_SHOP_CONTENT.technologies.title}
        icon={WOOCOMMERCE_SHOP_CONTENT.technologies.icon}
        list={WOOCOMMERCE_SHOP_CONTENT.technologies.list}
      />
      <ProcessSteps />
      <ContactForm contactFormType="Sklep internetowy" />
    </>
  );
}
