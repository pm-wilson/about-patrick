import React from 'react';
import ProjectItem from './ProjectItem';
import styles from '../styles.css';
import { groupProjectData, soloProjectData } from './projectData';

export default function Projects() {
  return (
    <div className={`${styles.projectsArea} ${styles.footerSpace}`}>
      <h2 className={styles.projectAreaTitle}>
        Fully Remote Team Projects &#40;{groupProjectData.length}&#41;
      </h2>
      {groupProjectData.map(item => {
        return (
          <ProjectItem 
            key={item.project}
            project={item.project}
            repoLink={item.repoLink}
            p1={item.p1}
            p2={item.p2}
            p3={item.p3}
            deployLink={item.deployLink}
            pictureSource={item.pictureSource}
            pictureAlt={item.pictureAlt}
          />
        );
      })}
      <h2 className={styles.projectAreaTitle}>
        Self Motivated Self Taught Vanilla JS Projects &#40;{soloProjectData.length}&#41;
      </h2>
      {soloProjectData.map(item => {
        return (
          <ProjectItem
            key={item.project}
            project={item.project}
            repoLink={item.repoLink}
            p1={item.p1}
            p2={item.p2}
            p3={item.p3}
            deployLink={item.deployLink}
            pictureSource={item.pictureSource}
            pictureAlt={item.pictureAlt}
          />
        );
      })}
    </div>
  );
}
