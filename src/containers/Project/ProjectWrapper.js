import React from 'react';

import Project from './Project';
import {useParams} from 'react-router';
import projects from '../../lib/Projects/projects';

export default function ProjectWrapper() {
  const {name} = useParams();
  const project = projects[name];

  return (
    <Project project={project}/>
  );
}
