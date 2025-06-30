import {Metadata} from 'next';
import styles from '../../styles.module.scss';
import Hero from '@/components/Articles/Hero/Hero';
import H3Number from '@/components/Articles/H3Number/H3Number';
import Logo from '@/public/assets/logo/WebSquirrel-logo-20x20.svg';
import CalendarIcon from '@/public/assets/icons/calendar-orange-icon.svg';
export const metadata: Metadata = {
  title: 'Dlaczego warto mieć stronę www?',
  description:
    'Strona internetowa jest wizytówką Twojej marki w internecie, która pozwala zwiększać jej zasięgi oraz analizować potrzeby Twoich klientów.',
  metadataBase: new URL(
    'https://websquirrel.pl/artykuly/dlaczego-warto-miec-strone-www'
  ),
  alternates: {
    canonical: 'https://websquirrel.pl/artykuly/dlaczego-warto-miec-strone-www',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function ArticlePage4() {
  return (
    <>
      <Hero
        subheader=""
        title="DLACZEGO WARTO MIEĆ STRONĘ WWW?"
        description="Strona internetowa jest wizytówką Twojej marki w internecie, która pozwala zwiększać jej zasięgi oraz analizować potrzeby Twoich klientów. Dowiedz się więcej co możesz zyskać."
      />
      <div className={styles.articleContainer}>
        <h2>Co zyskujesz ze stroną internetową?</h2>
        <section className={styles.articleSectionBorderLeftBottom}>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={1} title="Zasięgi firmy" />
            <p>
              Strona internetowa jest kolejnym narzędziem obok social mediów i
              portali ogłoszeniowych do zwiększania rozpoznawalności Twojej
              marki w internecie. Strona www zapewnia nowych klientów z
              wyszukiwarek. Działa to na zasadzie dopasowania tekstu wpisanego w
              pole wyszukiwarki z zawartościami stron i wyświetlenie ich w
              wynikach na podstawie dopasowania, oceny strony pod względem
              generowanego ruchu, wydajności, rzetelności oraz czasu
              zaangażowania użytkowników. Są jeszcze inne kryteria ale
              wymieniłem te najważniejsze. Nowe strony rzadko wyświetlają się na
              pierwszych stronach ze względu na konkurencje innych firm i ich
              portali. Po jakimś czasie jeżeli dobrze przekierujemy ruch na
              naszą stronę lub jest mała konkurencja dla danych fraz wpisywanych
              w wyszukiwarkę strona zacznie awansować i pojawiać się wyżej w
              wynikach. Ten proces zajmuje trochę czasu ale po jego osiągnięciu
              zyskujemy dużą ilość klientów, którzy interesują się naszymi
              usługami. Strony które znajdują się na pierwszych stronach
              wyszukiwarek dla popularnych fraz generują bardzo duże ilości
              odwiedzających, z których duża część może być potencjalnym
              klientami.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={2} title="Czas" />
            <p>
              Podstawowym celem strony jest przedstawienie oferty dla Twoich
              klientów. Jest tutaj bardzo dużo opcji na kreatywne rozwinięcie
              tematu i oszczędzenie Twojego czasu na odbieranie telefonów oraz
              odpisywanie na wiadomości typu poproszę ofertę. Wszystko masz w
              jednym miejscu dostępne 24/7 - wystarczy podać link.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={3} title="Wiarygodność" />
            <p>
              Firmy posiadające stronę www są częściej postrzegane jak
              wiarygodne. Dlaczego? Ponieważ dzięki stronie mają możliwość
              zaprezentowania swojego portfolio gdzie mogą pochwalić się swoją
              pracą i pokazać, że podchodzą do tematu profesjonalnie. Kolejną
              praktyką jest zamieszczanie opinii klientów w celu pokazania, że
              współpraca z Twoją firmą się opłaca i jesteś postrzegany jako
              rzetelny wykonawca.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={4} title="Profesjonalizm" />
            <p>
              Strona pozwala profesjonalnie zaprezentować profil Twojej firmy.
              To wizytówka, którą może wyświetlić każdy bez konieczności
              posiadania konta np. na SM. Na wzrost profesjonalizmu wpływają
              także dobrze rozmieszczone treści, które ułatwią Twoim klientom
              znalezienie konkretnych informacji, których potrzebują.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={5} title="Dostępność 24/7" />
            <p>
              Opis Twoich usług jest dostępny cały czas - nie tracisz klientów.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={6} title="Analiza" />
            <p>
              Zyskujesz dostęp do narzędzi analitycznych jak Google Analytics,
              które pomogą Ci monitorować ruch oraz zachowania odwiedzających na
              stronie. Dobra analiza wyników może pomóc w zrozumieniu potrzeb
              klientów i ukierunkowaniu rozwoju Twojej firmy.
            </p>
          </div>
        </section>

        <div className={styles.authorsBox}>
          <span className={styles.rowBox}>
            <img
              src={Logo.src}
              alt="websquirrel-logo"
              title="websquirrel-logo"
              width={20}
              height={20}
              loading="eager"
            />
            <span>Bartosz</span>
          </span>
          <span className={styles.rowBox}>
            <img
              src={CalendarIcon.src}
              alt="calendar-icon"
              title="calendar-icon"
              width={20}
              height={20}
              loading="eager"
            />
            <span>30.06.2025</span>
          </span>
        </div>
      </div>
    </>
  );
}
