import React, { useState } from 'react';
import styles from '../styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [currentTab, setCurrentTab] = useState(window.location.pathname);

  return (
    <div className={styles.headerArea}>
      <div className={styles.sitePages}>
        <Link
          to="/"
          onClick={() => setCurrentTab('/')}
          className={`
            ${styles.headerPage}
            ${styles.homePageSelect}
            ${currentTab === '/' && styles.currentPage}
          `}>Home</Link>
        <Link
          to="/projects"
          onClick={() => setCurrentTab('/projects')}
          className={`
            ${styles.headerPage}
            ${styles.projectsPageSelect}
            ${currentTab === '/projects' && styles.currentPage}
          `}>Projects</Link>
        <Link
          to="/about"
          onClick={() => setCurrentTab('/about')}
          className={`
            ${styles.headerPage}
            ${styles.aboutPageSelect}
            ${currentTab === '/about' && styles.currentPage}
          `}>About</Link>
        <Link
          to="/contact"
          onClick={() => setCurrentTab('/contact')}
          className={`
            ${styles.headerPage}
            ${styles.contactPageSelect}
            ${currentTab === '/contact' && styles.currentPage}
          `}>Contact</Link>
      </div>
      <h1 className={styles.nameAtTop}>Patrick Wilson</h1>
      <div className={styles.externalLinks}>
        <a className={styles.headerLink} target="_blank" rel="noreferrer" href="https://github.com/pm-wilson">Github</a>
        <a className={styles.headerLink} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pmwilson333/">LinkedIn</a>
      </div>
    </div>
  );
}
