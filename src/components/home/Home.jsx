import React from 'react';
import styles from '../styles.css';

export default function Home() {
  return (
    <div className={`${styles.homeArea} ${styles.footerSpace}`}>
      <div className={styles.homeText}>
        <p>Hi, I&apos;m Patrick Wilson, a full stack developer. Thanks for checking out my site!</p>
        <p>I am a full stack web developer familiar with Node.js on the back end, React and JavaScript on the front end. In past roles I have taken the initiative to improve my production using VBScript without any formal training in construction estimating, technical support, and insurance processing. Over the past two years I have taken my interest in coding in a new direction and learned full stack development.</p>
      </div>
    </div>
  );
}
