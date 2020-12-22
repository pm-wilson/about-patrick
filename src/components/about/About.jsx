import React from 'react';
import styles from '../styles.css';
import aboutStyles from './aboutStyles.css';
import hikingPic from '../../../public/aboutpics/hiking.jpg';
import golfPic from '../../../public/aboutpics/golf.jpg';
import bikePic from '../../../public/aboutpics/bike.jpg';
import bakingPic from '../../../public/aboutpics/baking.jpg';
import treePic from '../../../public/aboutpics/tree.jpg';
import gamesPic from '../../../public/aboutpics/games.jpg';
import medalsPic from '../../../public/aboutpics/medals.jpg';
import crossbowPic from '../../../public/aboutpics/crossbow.jpg';
import deskPic from '../../../public/aboutpics/desk.jpg';

export default function About() {
  return (
    <div className={`${styles.aboutArea} ${styles.footerSpace}`}>
      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace1}`}>
        <img 
          className={aboutStyles.fillImage}
          src={hikingPic}
          alt="Hiking Coyote Rock Wall"
        />
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace2}`}>
        <p className={aboutStyles.fillText}>Born and raised in the great Northwest, and fortunate enough to enjoy this corner of the world.</p>
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace3}`}>
        <img
          className={aboutStyles.fillImage}
          src={golfPic}
          alt="Me Golfing"
        />
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace4}`}>
        <img
          className={aboutStyles.fillImage}
          src={bikePic}
          alt="Me and My Bike"
        />
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace5}`}>
        <img
          className={aboutStyles.fillImage}
          src={bakingPic}
          alt="Fresh Baked Bread"
        />
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace6}`}>
        <img
          className={aboutStyles.fillImage}
          src={treePic}
          alt="Crooked Tree"
        />
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace7}`}>
        <img
          className={aboutStyles.fillImage}
          src={gamesPic}
          alt="Magic and Dungeons and Dragons Items"
        />
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace8}`}>
        <p className={aboutStyles.fillText}>I enjoy playing some of the most complex games on the planet and I believe they have given me a good head for coding.</p>
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace9}`}>
        <p className={aboutStyles.fillText}>I stay healthy by running and cycling, and balance it out by baking amazing bread and cooking dishes from all over the world.</p>
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace10}`}>
        <img
          className={aboutStyles.fillImage}
          src={medalsPic}
          alt="My Running Medals"
        />
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace11}`}>
        <img
          className={aboutStyles.fillImage}
          src={crossbowPic}
          alt="Lego Crossbow"
        />
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace12}`}>
        <img
          className={aboutStyles.fillImage}
          src={deskPic}
          alt="Desk I built"
        />
      </div>

      <div className={`${aboutStyles.gridSpace} ${aboutStyles.gridSpace13}`}>
        <p className={aboutStyles.fillText}>I enjoy designing and building things, like this desk that is built to fit me perfectly or a working Lego crossbow that ends Nerf wars before they begin.</p>
      </div>
    </div>
  );
}
