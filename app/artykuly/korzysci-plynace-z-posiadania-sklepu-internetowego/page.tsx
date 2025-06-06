import {Metadata} from 'next';
import styles from '../../styles.module.scss';
import Hero from '@/components/Articles/Hero/Hero';
import H3Number from '@/components/Articles/H3Number/H3Number';
import Logo from '@/public/assets/logo/WebSquirrel-logo-20x20.svg';
import CalendarIcon from '@/public/assets/icons/calendar-orange-icon.svg';
export const metadata: Metadata = {
  title: 'Korzyści płynące z posiadania sklepu internetowego',
  description:
    'W tym artykule dowiesz się jakie korzyści dla sprzedawcy i kupującego może przynieść sklep internetowy oraz jaką pełni on rolę w budowaniu marki.',
  metadataBase: new URL(
    'https://websquirrel.pl/artykuly/korzysci-plynace-z-posiadania-sklepu-internetowego'
  ),
  alternates: {
    canonical:
      'https://websquirrel.pl/artykuly/korzysci-plynace-z-posiadania-sklepu-internetowego',
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

export default function ArticlePage2() {
  return (
    <>
      <Hero
        subheader=""
        title="KORZYŚCI PŁYNĄCE Z POSIADANIA SKLEPU INTERNETOWEGO"
        description="W tym artykule dowiesz się jakie korzyści dla sprzedawcy i kupującego może przynieść sklep internetowy oraz jaką pełni on rolę w budowaniu marki."
      />
      <div className={styles.articleContainer}>
        <h2>Jakie korzyści zyskuje sprzedawca?</h2>
        <section className={styles.articleSectionBorderLeftBottom}>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={1} title="Oszczędność czasu" />
            <p>
              Automatyzacja zamówień - klienci sami kupują produkty, a
              sprzedawca odpowiada tylko za wykonanie i wysłanie zamówienia.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={2} title="Brak utraconych klientów" />
            <p>
              W skrzynce zbiera się duża ilość DM z zapytaniami o produkty i
              chęcią zakupu ale brakuje czasu na odpisanie w 24h? Klienci często
              kupują pod wpływem chwili, jeżeli nie dokonają zakupu szybko mogą
              się rozmyślić.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={3} title="Obszerne opisy produktów" />
            <p>
              Duża część DM dotyczy dodatkowych informacji o produkcie? Jeżeli
              ktoś sprzedaje produkty na social mediach to musi liczyć się z
              tym, że użytkownicy są tam nastawieni na krótkie treści i
              zazwyczaj omijają te długie. Sytuacja wygląda inaczej na stronie
              internetowej gdzie użytkownik jest przyzwyczajony do większej
              ilości treści i tekstu.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={4} title="Ustalone ceny" />
            <p>
              Odwiedzający sklep online rzadziej negocjują cenę, ponieważ
              wysłanie wiadomości e-mail zajmuje więcej czasu niż wysłanie DM
              np. na social mediach.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={5} title="Budowanie marki" />
            <p>
              Sklep internetowy jest częścią obecności Twojej marki w
              internecie, która odpowiada za przedstawienie jej głównie klientom
              z wyszukiwarek i bezpośrednich linków. Sklep online podnosi
              autentyczność Twojego wizerunku w sieci i pokazuje profesjonalizm
              firmy. Strony www dają możliwość analizowania ruchu klientów i
              dostarczania bezcennych informacji w jakim kierunku powinna
              rozwijać się marka żeby zaspokoić potrzeby klientów. Początkowo
              sklepy nie wpływają na zwiększenie liczby klientów, a wynika to z
              dużej konkurencji firm, które posiadają strony od lat. Strony te
              są postrzegane przez wyszukiwarki jako bardziej wiarygodne od nowo
              założonych ze względu na liczbę odwiedzin czy poleceń poprzez
              linki zewnętrzne na innych stronach (trust rank). W skrócie są
              bardziej wiarygodne co wpływa na umieszczanie ich na górze wyników
              wyszukiwania. Budowa wiarygodności strony to bardzo długi proces
              po którego osiągnięciu liczba odwiedzających będzie
              nieporównywalnie większa od tych pozyskanych z social mediów,
              kampanii reklamowych czy e-mail. Oczywiście nie należy o nich
              zapominać - każdy nowo pozyskany klient to zysk i większy zasięg.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={6} title="Zasięgi marki" />
            <p>
              W dzisiejszych czasach mamy dostępny pełen wachlarz platform do
              budowania zasięgów i docierania do większej grupy odbiorców.
              Instagram, Facebook, TikTok, YouTube, Pinterest czy LinkedIn. Są
              to platformy na których warto się udzielać i które dają możliwości
              generowania dużych zasięgów. Zastanówmy się teraz czy grupa
              odbiorców na TikToku będzie taka sama jak na Instagramie czy
              Facebooku? Ja uważam, że może ale nie musi. Najczęściej te grupy
              różnią się od siebie i to bardzo dobrze bo finalnie mamy więcej
              nowych osób, a nie powtarzających się. Warto zadbać o punkt
              wspólny gdzie można przekierować tych wszystkich obserwujących z
              różnych platform w jedno miejsce - sklep lub strona internetowa. W
              ten sposób zyskamy możliwość analizy zachowań klientów z różnych
              źródeł i co najważniejsze będziemy budować trust rank
              (wyświetlenia strony i wejścia na nią z linków z różnych portali),
              który w przyszłości pozwoli generować takie ilości klientów jak z
              social mediów ze znacznie mniejszym czasem poświęconym na
              marketing.
            </p>
          </div>
        </section>
        <h2>Korzyści dla klienta i sprzedawcy</h2>
        <section className={styles.articleSectionBorderLeftBottom}>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={1} title="Dostępność 24/7" />
            <p>
              Decyzja którą podejmuje kupujący często zajmuje od kilkunastu
              sekund do kilku minut. Posiadanie sklepu online rozwiązuje problem
              szybkiego odpowiadania na DM i utratę części klientów, ponieważ ma
              on możliwość samodzielnego sfinalizowania zakupu.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={2} title="Obszerne opisy produktów" />
            <p>
              Nie musimy się ograniczać do krótkich tekstów. Strony internetowe
              charakteryzują się tym, że normalnym dla czytającego będzie
              większa ilość tekstu ze szczegółami. Warto tylko zadbać o jego
              atrakcyjne rozmieszczenie (akapity, nagłówki, odstępy, zdjęcia)
              żeby łatwiej się to czytało.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={3} title="Bezpieczeństwo zakupu" />
            <p>
              Dokonując zakupu na stronie klient jest przeprowadzany przez
              proces finalizacji transakcji zakupu, czyli podania swoich danych,
              sprawdzenia regulaminu zakupu, zwrotów, wybrania opcji dostawy i
              finalnie dokonania płatności online przez zweryfikowaną bramkę
              płatniczą. Proces jest identyczny jak na innych platformach i
              powszechnie znany co powoduje wzrost zaufania kupującego.
            </p>
          </div>
          <div className={styles.articleBoxBorderLeftBottom}>
            <H3Number number={4} title="Komfort klienta" />
            <p>
              Czynników wpływających na zakup produktu jest wiele. Rozważmy
              jeden z najbardziej powszechnych czyli cenę i sytuację sprzedaży
              produktów np. na Instagramie. Klienci w celu sprawdzenia ceny
              muszą wejść w post co przy przejrzeniu kilku pierwszych kafelków i
              nie spełnieniu wymagań może prowadzić do opuszczenia profilu.
              Główny powód to zbyt długi czas potrzebny do osiągnięcia celu.
              Strona prezentuje całe dziesiątki produktów z kwotami, które można
              przejrzeć szybciej. Narzędzia filtrowania w przypadku dużych
              ilości produktów są ogromnym ułatwieniem dla klienta, który ma
              swoje oczekiwania i cele. Pomagają znaleźć szybko produkt i dają
              pozytywne odczucia, że kupujący nie zmarnował swojego czasu na
              stronie nawet jeżeli nic nie kupił. To jest sukces, ponieważ jest
              wysoce prawdopodobne, że wróci w najbliższym czasie.
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
            <span>06.06.2025</span>
          </span>
        </div>
      </div>
    </>
  );
}
