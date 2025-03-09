'use client';
import React from 'react';
import styles from './processSteps.module.scss';
import ChevronIcon from '@/public/assets/icons/chevron-forward-icon.svg';

const WEBSITE_PROCESS_STEPS = [
  {
    title: 'Konsultacja telefoniczna',
    description: 'Omówienie założeń projektu.',
  },
  {
    title: 'Podpisanie umowy',
    description:
      'Założenia ustalone, wiemy na czym stoimy - podpisujemy umowę potwierdzającą naszą współpracę.',
  },
  {
    title: 'Tworzenie projektu graficznego',
    description:
      'Tworzymy szkic strony i po otrzymaniu materiałów takich jak grafiki przystępujemy do prac nad projektem graficznym w Figmie. Po zakończeniu prac dostaną Państwo link do projektu. Po zapoznaniu się z nim umawiamy sie na konsultację.',
  },
  {
    title: 'Akceptacja/poprawki',
    description:
      'Jeżeli projekt graficzny jest ok to lecimy dalej. Jeżeli trzeba coś poprawić to poprawiamy.',
  },
  {
    title: 'Tworzenie strony',
    description:
      'Na tym etapie praca jest głównie po naszej stronie ale jest to dobry moment żeby dosłać do nas teksty na stronę i inne informacje ustalone na etapie planowania.',
  },
  {
    title: 'Akceptacja/poprawki',
    description:
      'Jeżeli strona jest ok to wrzucamy ją na hosting i zajmujemy się SEO. Jeżeli trzeba coś poprawić to poprawiamy.',
  },
  {
    title: 'Finisz',
    description:
      'Strona zrobiona - klient zadowolony. Spotykamy się na Google Meet i robimy krótkie szkolenie z obsługi strony. Możemy też zrobić instrukcję obsługi w formie PDF. Pozostajemy w kontakcie i służymy pomocą.',
  },
];

const ProcessSteps = () => {
  return (
    <div className={styles.container}>
      <h2>ETAPY PROCESU</h2>
      <div className={styles.rowBox}>
        {WEBSITE_PROCESS_STEPS.map((step, index) => (
          <React.Fragment key={index}>
            <div className={styles.stepBox}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index !== WEBSITE_PROCESS_STEPS.length - 1 && (
              <img className={styles.icon} src={ChevronIcon.src} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
