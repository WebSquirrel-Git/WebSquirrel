import ContactForm from '@/components/ContactForm/ContactForm';
import Advantages from '@/components/HomePage/Advantages/Advantages';
import Graphics from '@/components/HomePage/Graphics/Graphics';
import Hero from '@/components/HomePage/Hero/Hero';
import Pages from '@/components/HomePage/Pages/Pages';

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <Pages />
      <Graphics />
      <ContactForm contactFormType="All" />
    </>
  );
}
