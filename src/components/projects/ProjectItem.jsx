import React from 'react';
import projectStyles from './projectStyles.css';
import PropTypes from 'prop-types';

export default function ProjectItem(props) {
  return (
    <div className={projectStyles.projectItemArea}>
      <div className={projectStyles.linkBar}>
        <h2 className={projectStyles.siteTitle}>{props.project}</h2>
        <a 
          className={projectStyles.siteRepo}
          rel="noreferrer"
          target="_blank"
          href={props.repoLink}
        ><img alt="Project Github Link" src="../../../public/assets/pagepics/GitHub-Mark-64px.png"/></a>
      </div>
      <div className={projectStyles.siteDescription}>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <p>{props.p3}</p>
      </div>
      <a
        rel="noreferrer"
        target="_blank"
        href={props.deployLink}
      >
        <img
          className={projectStyles.sitePreview}
          src={props.pictureSource}
          alt={props.pictureAlt}
        />
      </a>
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
