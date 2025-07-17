'use client';
import React, {useEffect, useState} from 'react';
import styles from './popup.module.scss';
import {hasCookie, setCookie} from 'cookies-next';
import DefaultLink from '../../Links/DefaultLink/DefaultLink';
import DefaultButton from '../../Buttons/DefaultButton/DefaultButton';

const CookiesPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (hasCookie('cookies') === false) {
      const timer = setTimeout(() => setShowPopup(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  const closePopupHandler = () => {
    setCookie('cookies', 0);
    setShowPopup(false);
  };

  return (
    <div
      className={styles.popup}
      style={{display: showPopup ? 'flex' : 'none'}}
    >
      <span className={styles.cookiesAbout}>
        Używamy plików cookies, aby zapewnić lepszą obsługę. Kontynuuj
        korzystanie z witryny jeśli się z tym zgadzasz, lub dowiedz się,
        <a href="https://www.google.com/search?q=jak+wy%C5%82%C4%85czy%C4%87+pliki+cookies&sca_esv=5ed3572dacaed608&ei=5VNAaMjJKKawwPAP6eyy6Q0&oq=jak+wy%C5%82%C4%85czy%C4%87+pliki+&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhZqYWsgd3nFgsSFY3p5xIcgcGxpa2kgKgIIADIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB5I3C5QAFjjJ3AAeAGQAQCYAVWgAYAKqgECMTm4AQPIAQD4AQGYAhOgAtQKwgILEAAYgAQYsQMYgwHCAg4QLhiABBixAxjRAxjHAcICBBAuGAPCAggQABiABBixA8ICCxAuGIAEGLEDGIMBwgIIEC4YgAQYsQPCAg4QLhiABBixAxiDARiKBcICChAAGIAEGEMYigXCAgUQLhiABMICCBAuGIAEGNQCwgIOEC4YgAQYsQMYgwEY1ALCAgoQLhiABBhDGIoFwgIOEAAYgAQYsQMYgwEYyQPCAgsQABiABBiSAxiKBcICCxAuGIAEGLEDGNQCwgIKEAAYgAQYyQMYCsICBxAAGIAEGArCAgsQABiABBixAxiLA8ICFxAuGIAEGLEDGIMBGNQCGKQDGKgDGIsDwgIIEAAYgAQYiwOYAwCSBwIxOaAHu9oBsgcCMTm4B9QKwgcEMi0xOcgHTg&sclient=gws-wiz-serp">
          {' '}
          jak wyłączyć pliki cookies
        </a>
        .
      </span>
      <div className={styles.rowBox}>
        <DefaultLink
          name="Polityka prywatności"
          url="/assets/statues/WebSquirrel_Polityka_prywatności.pdf"
        />
        <DefaultButton name="Akceptuję" onClick={closePopupHandler} />
      </div>
    </div>
  );
};

export default CookiesPopup;
