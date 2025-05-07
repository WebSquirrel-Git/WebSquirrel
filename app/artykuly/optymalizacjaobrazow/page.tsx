import {Metadata} from 'next';
import styles from '../../styles.module.scss';
import Hero from '@/components/Articles/Hero/Hero';
import H3Number from '@/components/Articles/H3Number/H3Number';
import ArticleImg1 from '@/public/assets/articles/optymalizacjaobrazow1.webp';
import ArticleImg2 from '@/public/assets/articles/optymalizacjaobrazow2.webp';
import ArticleImg3 from '@/public/assets/articles/optymalizacjaobrazow3.webp';
import ArticleImg4 from '@/public/assets/articles/optymalizacjaobrazow4.webp';
import Logo from '@/public/assets/logo/WebSquirrel-logo-20x20.svg';
import CalendarIcon from '@/public/assets/icons/calendar-orange-icon.svg';
import LinksBox from '@/components/Articles/LinksBox/LinksBox';
export const metadata: Metadata = {
  title: 'Optymalizacja obrazów na stronie internetowej',
  description:
    'W tym artykule dowiesz się jak zoptymalizować grafiki na stronie internetowej, oraz poznasz podstawowe narzędzia do ich edycji.',
  metadataBase: new URL('https://websquirrel.pl/artykuly/optymalizacjaobrazow'),
  alternates: {
    canonical: 'https://websquirrel.pl/artykuly/optymalizacjaobrazow',
    languages: {
      'pl-PL': '/pl-PL',
      'en-US': '/en-US',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function ArticlePage1() {
  return (
    <>
      <Hero
        subheader=""
        title="OPTYMALIZACJA OBRAZÓW NA STRONIE INTERNETOWEJ"
        description="W tym artykule dowiesz się jak zoptymalizować grafiki na stronie internetowej, oraz poznasz podstawowe narzędzia do ich edycji."
      />
      <div className={styles.articleContainer}>
        <h2>Jakie są cele i efekty optymalizacji obrazów na strony www ?</h2>
        <section className={styles.articleSectionBorderLeftBottom}>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number
              number={1}
              title="Zmniejszenie czasu ładowania strony internetowej"
            />
            <p>
              Wchodząc na stronę internetową aplikacja po stronie klienta
              zgłasza serwerowi, że klient wszedł na witrynę i potrzebuje listy
              rzeczy do wyświetlenia. Serwer odpowiada wysyłając potrzebne
              rzeczy, a czas jak szybko odpowiedź dotrze na wasze urządzenie
              będzie zależała w dużej mierze od wielkości przesyłanych plików.
              Zmniejszając rozmiar plików znacząco przyspieszamy szybkość
              działania naszej strony, co pozwoli klientowi na szybszy czas
              interakcji z jej elementami.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number
              number={2}
              title="Dostosowanie strony dla osób niewidomych"
            />
            <p>
              Dodając zdjęcia na stronę internetową mamy możliwość dodania
              atrybutów “alt”. Wartości tych atrybutów są sczytywane przez
              czytniki ekranu i pozwalają niewidomym zrozumieć co jest na
              obrazku. Alt posiada również drugą funkcję - jeżeli z jakiś
              powodów obraz się nie załaduje to zostanie on zastąpiony tekstem z
              atrybutu. Tekst powinien być napisany w takim języku w jakim jest
              napisana treść strony. To samo tyczy się atrybutu title.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={3} title="Optymalizacja SEO pod przeglądarki" />
            <p>
              Dokładnego algorytmu Google, który ocenia i pozycjonuje strony nie
              znamy, ale za to mamy trochę wytycznych na co warto zwrócić uwagę:
              <br />
              - Obrazy powinny mieć dostosowany rozmiar do faktycznego rozmiaru
              w jakim są wyświetlane na ekranie.
              <br />
              - Powinniśmy używać formatów zmniejszających rozmiar pliku takich
              jak .webp.
              <br />
              - Zdjęcia powinny mieć atrybuty alt, w celu umożliwienia
              zrozumienia treści grafiki przez czytniki ekranu dla osób
              niewidomych.
              <br />
              - Zalecane jest używanie atrybutu title, który podobnie jak alt ma
              na celu tekstowe opisanie grafiki.
              <br />
            </p>
          </div>
        </section>
        <h2>Edycja obrazów krok po kroku</h2>
        <section className={styles.articleSectionBorderLeftBottom}>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={1} title="Zmiana rozmiaru grafiki" />
            <p>
              Zawsze jak chcecie przeskalować grafikę skalujcie ją w dół czyli
              np. mamy obraz 850x351px to skalujmy do 600x248px. Zachowajcie też
              sb zapas około 100px - grafika na stronie ma mieć rozmiar
              500x206px to skalujcie do 600x248px. Skalowanie do wyższej
              rozdzielczości nie ma sensu, ponieważ dojdzie do rozciągnięcia
              pixeli i rozmycia obrazu.
            </p>
            <p>
              Podczas skalowania zachowajcie proporcje obrazu. Większość stron i
              narzędzi ma tą funkcję ustawioną jako automatyczną pod nazwą
              aspect ratio. Jeżeli proporcje obrazu wam nie odpowiadają możecie
              go wykadrować i dopasować jego rozdzielczość, ale żeby to dobrze
              zrobić należy sięgnąć po bardziej specjalistyczne narzędzia jak
              Figma czy Canva.
            </p>
            <img
              src={ArticleImg1.src}
              width={1050}
              height={530}
              alt="zmiana-rozmiaru-obrazu"
              title="zmiana-rozmiaru-obrazu"
              loading="lazy"
            />
            <p style={{textAlign: 'center'}}>
              Do zmiany rozmiaru obrazów polecamy stronę:
              <br />
              <a href="https://www.iloveimg.com/resize-image">
                https://www.iloveimg.com/resize-image
              </a>
              <br />
              Prosta w obsłudze, darmowa i daje możliwość przeskalowania wielu
              obrazów za jednym razem.
            </p>
            <img
              src={ArticleImg2.src}
              width={1050}
              height={530}
              alt="kadrowanie-obrazu"
              title="kadrowanie-obrazu"
              loading="lazy"
            />
            <p style={{textAlign: 'center'}}>
              Do kadrowania i zmiany rozdzielczości obrazów polecamy Figme. Jest
              to darmowe narzędzie, które zostało stworzone do projektowania
              interfejsów i daje duże możliwości edycji grafik i wiele więcej.
              Ze względu na rozbudowane funkcje aplikacji jej nauka wymaga
              czasu, ale na pewno Wam się to zwróci w przyszłości, gdy zajdzie
              potrzeba edycji grafik lub tworzenia nowych do postów na social
              media lub stronę www. Podobna do popularnej Canvy ale naszym
              zdaniem jest o kilka poziomów wyżej.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={2} title="Zmiana formatu obrazu" />
            <p>
              Najlepszym formatem, który będzie najmniej ważył jest .webp lub
              jeżeli macie grafikę wektorową to oczywiście zostańcie przy SVG.
              Warto zwrócić uwagę na jakość obrazu po konwersji. Jeżeli obraz ma
              duże nasycenie kolorów to znacząco zmniejszymy rozmiar pliku
              (oczywiście kosztem jakości ale w większości przypadków jest on
              akceptowalny). W przypadku niskiego nasycenia np. gdy mamy bardzo
              jasną grafikę warto sprawdzić rozmiar pliku po konwersji i jego
              jakość, ponieważ tutaj zmiany w rozmiarze mogą być bardzo małe, a
              stracimy dużo na jakości. W takim przypadku lepiej pozostać przy
              oryginalnym formacie.
            </p>
            <img
              src={ArticleImg3.src}
              width={1050}
              height={530}
              alt="zmiana-formatu-obrazu"
              title="zmiana-formatu-obrazu"
              loading="lazy"
            />
            <p style={{textAlign: 'center'}}>
              Do zmiany formatu polecamy stronę:
              <br />
              <a href="https://pixelied.com/convert/jpg-converter/jpg-to-webp">
                https://pixelied.com/convert/jpg-converter/jpg-to-webp
              </a>
              <br />
              Darmowa, prosta w obsłudze i daje możliwość wrzucenia dużej ilości
              zdjęć.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={3} title="Ustawienie atrybutów alt i tittle" />
            <p>
              Podczas wrzucania grafik na stronę nie zapomnijcie dodać atrybutów
              alt i tittle (mogą być takie same). Piszcie krótko co przedstawia
              zdjęcie, w języku w jakim jest strona i zamiast spacji stosujcie
              podłogę “_” lub myślnik “-”. Spacje są różnie sczytywane przez
              programy co może prowadzić do podmiany znaków i złej interpretacji
              atrybutów.
            </p>
            <img
              src={ArticleImg4.src}
              width={1050}
              height={530}
              alt="edycja-atrybutow-obrazu"
              title="edycja-atrybutow-obrazu"
              loading="lazy"
            />
          </div>
        </section>
        <p style={{textAlign: 'center'}} className={styles.orange}>
          <b>
            “W tym artykule nie zostało przedstawione nic odkrywczego, ale mam
            nadzieję że pomoże on osobą, które dopiero zaczynają swoją przygodę
            z zarządzaniem swoich stron internetowych.”
          </b>
        </p>
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
            <span>07.05.2025</span>
          </span>
        </div>
        <LinksBox />
      </div>
    </>
  );
}
