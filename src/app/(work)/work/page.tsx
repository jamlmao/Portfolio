import React from 'react'
import WorkContent from "./_components/work-content";
import {workExperience} from '../../../data/work';

const WorkPage = () => {
  return (
    <div>
      <WorkContent experiences={workExperience} />
    </div>
  )
}

export default WorkPage;