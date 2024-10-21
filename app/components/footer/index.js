import React from 'react'
import styles from './styles.module.css';
import Link from 'next/link';


function Footer() {
  return (
    <footer className={styles.footer}>
        Made by Me&nbsp;
        <Link href="/">TEST</Link>
    </footer>
  )
}

export default Footer