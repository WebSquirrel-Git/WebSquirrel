import {Metadata} from 'next';
import styles from '../../styles.module.scss';
import Hero from '@/components/Articles/Hero/Hero';
import H3Number from '@/components/Articles/H3Number/H3Number';
import ArticleImg1 from '@/public/assets/articles/rolanaglowkow1.webp';
import ArticleImg2 from '@/public/assets/articles/rolanaglowkow2.webp';
import ArticleImg3 from '@/public/assets/articles/rolanaglowkow3.webp';
import Logo from '@/public/assets/logo/WebSquirrel-logo-20x20.svg';
import CalendarIcon from '@/public/assets/icons/calendar-orange-icon.svg';
export const metadata: Metadata = {
  title: 'Rola nagłówków na stronie internetowej',
  description:
    'W artykule poruszono następujące zagadnienia: jak umieszczać nagłówki, dobre praktyki, znaczenie nagłówków dla wyszukiwarek internetowych, nagłówki a optymalizacja seo.',
  metadataBase: new URL(
    'https://websquirrel.pl/artykuly/rola-naglowkow-na-stronie-internetowej'
  ),
  alternates: {
    canonical:
      'https://websquirrel.pl/artykuly/rola-naglowkow-na-stronie-internetowej',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function ArticlePage3() {
  return (
    <>
      <Hero
        subheader=""
        title="ROLA NAGŁÓWKÓW NA STRONIE INTERNETOWEJ"
        description="Dowiesz się jak poprawnie ustawić nagłówki na stronie internetowej. Jakie jest ich znaczenie, jak ważna jest hierarchia, estetyka i ich funkcje związane z SEO."
      />
      <div className={styles.articleContainer}>
        <h2>Rola nagłówków na stronie internetowej</h2>
        <section className={styles.articleSectionBorderLeftBottom}>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={1} title="Zwiększenie czytelności treści" />
            <p>
              Jednym z celów nagłówków jest wyróżnienie elementów tekstu, żeby
              czytelnik mógł łatwo odnaleźć informacje, które go interesują.
              Pomimo przyzwyczajenia odwiedzających do przeglądania długich
              treści na stronach internetowych, analizy danych pokazują, że
              jeżeli nie znajdzie on interesujących go informacji w ciągu
              maksymalnie minuty może opuścić naszą stronę. Dlatego nagłówki
              odgrywają tak ważną rolę w czytelności strony.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={2} title="SEO" />
            <p>
              Kolejnym kluczowym aspektem stosowania nagłówków jest ich rola w
              tym jak algorytmy wyszukiwarek rozumieją naszą stronę. Nagłówki
              powinny zawierać słowa kluczowe, które nasi klienci wpisują w
              wyszukiwarkę. Na podstawie ich treści algorytmy częściowo
              dobierają strony do wyników wyszukiwania przedstawianych
              szukającemu. Algorytm ocenia także uporządkowanie nagłówków i
              spójność treści. Jeżeli będziemy poruszać zbyt dużo tematów na
              jednej stronie to może on je uznać za zbyt mało wartościowe i
              zaniżyć ocenę strony. Złe uporządkowanie np. umieszczenie nagłówka
              H3 przed H1 będzie wpływać negatywnie, ponieważ nie trzymamy się
              kolejności nagłówków.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={3} title="Dostępność" />
            <p>
              Nagłówki pomagają w nawigacji po stronie internetowej osobom
              niewidomym i innym korzystającym z czytników ekranu.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={4} title="Estetyka" />
            <p>
              Wspomniałem o tym w pierwszym punkcie, ale nie dodałem, że
              nagłówki mogą być po prostu atrakcyjne i satysfakcjonujące dla oka
              lub pełnić rolę wyróżniających elementów strony.
            </p>
            <img
              src={ArticleImg1.src}
              width={1050}
              height={530}
              alt="funkcje-estetyczne-naglowkow"
              title="funkcje-estetyczne-naglowkow"
              loading="lazy"
            />
            <p style={{textAlign: 'center'}}>
              Przykład realizacji gdzie charakterystycznym i powtarzalnym
              elementem strony internetowej są nagłówki występujące na
              odróżniającym je tle z postrzępionymi krawędziami.
            </p>
            <img
              src={ArticleImg2.src}
              width={1050}
              height={530}
              alt="funkcje-estetyczne-naglowkow"
              title="funkcje-estetyczne-naglowkow"
              loading="lazy"
            />
            <p style={{textAlign: 'center'}}>
              Moja strona korzysta z prostych nagłówków, odróżniających się
              kolorem, grubością oraz czcionką od reszty tekstu. Są to zabiegi
              estetyczne, które nadają spójność stronie oraz zwiększają jej
              czytelność.
            </p>
          </div>
        </section>
        <h2>Zasady stosowania nagłówków na stronie internetowej</h2>
        <section className={styles.articleSectionBorderLeftBottom}>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={1} title="Nagłówek H1" />
            <p>
              Podstawową zasadą jest stosowanie jednego nagłówka H1 na każdej
              podstronie. Choć technicznie możliwe jest użycie więcej niż
              jednego H1, może to osłabić wartość słów kluczowych i wpłynąć
              negatywnie na ocenę strony przez algorytmy wyszukiwarek. H1
              powinien jasno opisywać zawartość strony i zawierać najważniejsze
              słowa kluczowe. Stosowanie wielu nagłówków H1 może zaburzyć
              hierarchię treści i utrudnić algorytmom zrozumienie struktury
              strony.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={2} title="Hierarchia nagłówków" />
            <p>
              Najwyższa wartość nagłówka to H1 i używamy go tylko raz. Nagłówki
              H2 są kolejne w randze, możemy ich użyć ile chcemy ważne jest
              tylko zachowanie kolejności. Przykładowo użycie H2 później
              paragrafu, H3 czy H4 jest ok, ale użycie H1 → H3 → H2 już nie.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={3} title="Wartości nagłówków" />
            <p>
              Dla algorytmu najbardziej liczą się nagłówki od H1 do H3, to
              właśnie tam powinny być zawarte słowa kluczowe. Reszta jest mniej
              istotna więc możecie je pominąć lub stosować ale zgodnie z
              hierarchią
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={4} title="Długość" />
            <p>
              Nagłówki mają być krótkie i treściwe. Zbyt wiele słów zaburzy
              skuteczność algorytmu i utrudni użytkownikowi czytelność.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={5} title="Nagłówki i paragrafy" />
            <p>
              Paragrafy nie wliczają się do hierarchii nagłówków jak i pozostałe
              elementy HTML jak img, span czy div. Pamiętajcie tylko żeby zacząć
              od H1 i umieścić kilka H2, H3 bo to one są kluczowe dla algorytmu
              i czytelności strony.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={6} title="Estetyka" />
            <p>
              Warto trzymać się spójnych zasad typografii — ustalić domyślne
              rozmiary i marginesy nagłówków. Należy się trzymać tej koncepcji
              ze względów estetycznych i czytelności strony. Oczywiście możecie
              zmieniać rozmiary, czcionki i wagę tekstu ale bądźcie sumienni w
              ustawianiu proporcji pomiędzy nimi. Rozmiary nagłówków powinny być
              ustawione odgórnie dla całej strony, żeby była ona spójna.
            </p>
          </div>
        </section>
        <h2>Przydatne narzędzia</h2>
        <section className={styles.articleSectionBorderLeftBottom}>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={1} title="META SEO inspector" />
            <p>
              To rozszerzenie do przeglądarki Google Chrome, które pozwala
              szybko sprawdzić strukturę nagłówków na stronie internetowej –
              zarówno ich treść, jak i kolejność. Narzędzie jest szczególnie
              przydatne podczas analizy własnej strony lub w trakcie
              przeglądania witryn konkurencji. Dodatkową zaletą jest możliwość
              kliknięcia wybranego nagłówka z listy, co automatycznie przenosi
              nas do odpowiedniego miejsca na stronie.
            </p>
            <img
              src={ArticleImg3.src}
              width={1050}
              height={530}
              alt="wtyczka-meta-seo-inspector"
              title="wtyczka-meta-seo-inspector"
              loading="lazy"
            />
            <p style={{textAlign: 'center'}}>
              Link do wtyczki:
              <br />
              <a href="https://chromewebstore.google.com/detail/ibkclpciafdglkjkcibmohobjkcfkaef?utm_source=item-share-cb">
                https://chromewebstore.google.com/detail/ibkclpciafdglkjkcibmohobjkcfkaef?utm_source=item-share-cb
              </a>
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
            <span>12.06.2025</span>
          </span>
        </div>
      </div>
    </>
  );
}
