import Link from 'next/link';
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa';
import styles from './styles.module.css';

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <FaPlayCircle /> ALUCFILMS
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
        <input type="checkbox" className={styles.menuToggle} id="menuToggle" />
        <label className={styles.hamburgerMenu} htmlFor="menuToggle">
          <span></span>
        </label>
        <nav className={`${styles.hamburgerContainer}`}>
          <div className={styles.hambugerWrapper}>
            <ul>
              <li>
                <Link href="/">Movies</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/">Series</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/">Kids</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header