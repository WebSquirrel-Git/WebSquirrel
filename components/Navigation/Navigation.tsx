'use client';
import {useState} from 'react';
import NavBar from './NavBar/NavBar';
import styles from './navigation.module.scss';
import NavMenu from './NavMenu/NavMenu';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(true);
  };
  const hideMenuHandler = () => {
    setShowMenu(false);
  };
  return (
    <>
      <NavBar showMenuHandler={showMenuHandler} />
      <NavMenu hideMenuHandler={hideMenuHandler} showMenu={showMenu} />
    </>
  );
};
export default Navigation;
