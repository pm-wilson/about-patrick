import React from 'react';
import ProjectItem from './ProjectItem';
import styles from '../styles.css';
import { groupProjectData, soloProjectData } from './projectData';

export default function Projects() {


  return (
    <div className={`${styles.projectsArea} ${styles.footerSpace}`}>
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
