import React from 'react';
import projectStyles from './projectStyles.css';
import PropTypes from 'prop-types';

export default function ProjectItem(props) {
  return (
    <div className={projectStyles.projectItemArea}>
      <div className={projectStyles.linkBar}>
        <h3 className={projectStyles.siteTitle}>{props.project}</h3>
        <a 
          className={projectStyles.siteRepo}
          rel="noreferrer"
          target="_blank"
          href={props.repoLink}
        ><img 
            alt="Project Github"
            src="./pagepics/GitHub-Mark-64px.png"
          /></a>
      </div>
      <div className={projectStyles.siteDescription}>
        <a
          rel="noreferrer"
          target="_blank"
          href={props.deployLink}
        ><img
            className={projectStyles.sitePreview}
            src={props.pictureSource}
            alt={props.pictureAlt}
          />
        </a>
        <p>{props.p1}</p>
        {props.p2 && <p>{props.p2}</p>}
        {props.p3 && <p>{props.p3}</p>}
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  project: PropTypes.string,
  repoLink: PropTypes.string,
  p1: PropTypes.string,
  p2: PropTypes.string,
  p3: PropTypes.string,
  deployLink: PropTypes.string,
  pictureSource: PropTypes.string,
  pictureAlt: PropTypes.string,
};
