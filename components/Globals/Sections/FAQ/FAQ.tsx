'use client';
import Image from 'next/image';
import styles from './faq.module.scss';
import ChevronIcon from '@/public/assets/icons/chevron-back-icon.svg';
import {useState} from 'react';
const FAQList = [
  {
    id: 0,
    question: 'Jak przebiega realizacja strony?',
    answer:
      'Na początku umawiamy się na niezobowiązującą konsultację online gdzie ustalamy cele projektu strony internetowej. Następnie przeprowadzam analizę konkurencji oraz Twojej marki w Internecie i na podstawie wstępnych wytycznych przedstawiam plan na wykonanie strony. W kolejnym etapie tworzę dla Ciebie projekt graficzny, do którego masz podgląd live, a ja infformuję Cię na bieżąco o postępach. Możesz wnosić uwagi i sugestie na tym etapie. Umawiamy się na spotkanie online ja prezentuje Ci projekt graficzny i go omawiam. Jest to też moment gdzie pomogę Ci zakupić hosting oraz domenę i przeprowadzę przez proces udostępniania go dla mnie abym mógł stworzyć na nim stronę oraz odpowiednio go skonfigurować. Teraz nadchodzi etap kodowania oraz konfiguracji serwera. Po skończonej pracy spotykamy się online i prezentuję Ci stronę. Jeżeli wystąpią jakieś błedy poprawiam. Następny etap to konfiguracja dodatkowych usług (google, e-mail itp.) oraz szkolenie online. Po zakończonym projekcie pozostaje do Twojej dyspozycji i służę pomocą. Standardowo większość klientów daje mi dostęp do analizy wyświetleń strony i jej SEO. Na bieżąco monitoruje postępy, raportuje Ci co jakiś czas i podsuwam propozycje na dalszy rozwój marki.',
  },
  {
    id: 1,
    question: 'Ile trwa stworzenie strony internetowej?',
    answer:
      'Czas realizacji projektu zależy od jego złożoności. Czas wykonania strony wizytówki zazwyczaj zajmuje mi do tygodnia. Złożona strona internetowa z 10 podstronami i małą powtarzalnością treści pod kątem graficznym może zająć 2 miesiące. Na początku współpracy po ustaleniu wstępnego planu zawsze szacujemy deadline na kiedy strona ma być gotowa.',
  },
  {
    id: 2,
    question: 'Czy konsultacja jest zobowiązująca?',
    answer:
      'NIE. Konsultacja jest darmowa i ma na celu sprawdzenie czy ja spełniam Twoje oczekiwania względem projektu oraz czy Twoje oczekiwania względem strony nie wykraczają poza moje kompetencje.',
  },
  {
    id: 3,
    question:
      'Czy wykonuję projekty graficzne ulotek, postów na Instagram i inne social media?',
    answer:
      'Tak - zależy mi na tym żeby obsługa była kompleksowa. Dlatego jeżeli potrzebujesz dodatkowych materiałów graficznych do uzupełnienia brandingu swojej firmy wykonam je dla Ciebie. Realizacja przebiega tak samo jak przy projekcie graficznym strony z podglądem live. Finalnym efektem będzie dostarczenie przeze mnie spakowanych plików na e-mail oraz krótkie szkolenie z edycji szablonów w Figmie.',
  },
  {
    id: 4,
    question: 'Ile osób pracuje nad stroną?',
    answer:
      'Jedna - wszystkim zajmuję się ja i o wszystko możesz się pytać mnie :)',
  },
  {
    id: 5,
    question: 'Co potrzebuję do stworzenia strony internetowej?',
    answer:
      'O wszystkim poinformuję Cię na konsultacji, możesz też sprawdzić opisy w mojej ofercie. Podstawowe rzeczy to hosting, domena, serwer poczty (jeżeli chcesz formularz i robimy to w WP), logo (najlepiej wektorowe - jeżeli nie posiadasz w takim formacie mogę je dla Ciebie stworzyć), zdjęcia opcjonalnie. Została najważniejsza rzecz czyli czas na spotkania ze mną, resztą zajmę się ja.',
  },
  {
    id: 6,
    question: 'Jak wygląda rozliczenie?',
    answer:
      'Po zakończonej współpracy wystawiam fakturę, którą wyślę Ci na e-mail. Czas na opłacenie faktury wynosi 14 dni.',
  },
  {
    id: 7,
    question: 'Czy każda strona jest bezpieczna?',
    answer:
      'Tak - wszystkie strony posiadają samoodnawialny certyfikat SSL. Dbam także o pozostałe zabezpieczenia, które jak aktualizacje, regularne kopie danych, mocne hasła itp. Poziomy zabezpieczeń różnią się od środowiska projektu jakie wybierzemy, ale wszystkie zapewniają bezpieczeństwo Twojej strony.',
  },
  {
    id: 8,
    question: 'Czy mogę samodzielnie obsługiwać stronę?',
    answer:
      'Tak - jeżeli powiesz mi o tym na początku zaoferuję stworzenie strony w Wordpress lub PayloadCMS w zależności od potrzeb projektu. Obydwa panele są proste w obsłudze. Dostaniesz także ode mnie poradnik w pdf, krótkie szkolenie online oraz zawsze możesz pisać jeżeli będziesz miał z czymś trudności.',
  },
  {
    id: 9,
    question: 'Czy zajmujesz się obsługą stron internetowych?',
    answer:
      'Tak - jest taka opcja. Na ten moment mam dwójkę klientów, którzy nie chcieli panelu do edycji i powierzyli mi wprowadzanie zmian. Dlaczego tak? Projekty wymagały wprowadzenia nietypowych funkcjonalności dlatego wybraliśmy Next.js. Stronę obsługuję poprzez edycję kodu oraz jego aktualizację na stronie online na serwerze VPS. Jest to bardzo bezpieczne rozwiązanie ze względu na szereg dodatkowych zabezpieczeń na serwerze i wielopoziomową autentykację. W przypadku drobnych poprawek nie pobieram kosztów, a w przypadku większych 50 zł/h. Rozliczenie na koniec miesiąca fakturą.',
  },
];
export const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState<null | number>(null);

  const toggleQuestion = (id: number) => {
    console.log(activeFAQ, id);
    if (activeFAQ === id) {
      setActiveFAQ(null);
    }
    if (activeFAQ !== id) {
      setActiveFAQ(id);
    }
  };
  return (
    <div className={styles.container}>
      <h2>Najczęściej zadawane pytania</h2>
      <div className={styles.columnBox}>
        {FAQList.map((faq) => (
          <button
            key={faq.id}
            onClick={() => toggleQuestion(faq.id)}
            className={styles.faqBox}
          >
            <div
              className={`${styles.faqHeader} ${activeFAQ === faq.id ? styles.headerActive : ''}`}
            >
              <span>{faq.question}</span>
              <Image
                className={`${styles.chevronIcon} ${activeFAQ === faq.id ? styles.rotateIcon : ''}`}
                src={ChevronIcon}
                alt="dowiedz się więcej"
                loading="lazy"
                width={40}
                height={40}
              />
            </div>
            <p
              className={`${styles.faqAnswer} ${activeFAQ === faq.id ? styles.show : styles.hidden}`}
            >
              {faq.answer}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
