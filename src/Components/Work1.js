import React from 'react';
import ProjectCardData from './WorkCard';
import Work from './Work'; 

const Work1 = () => {
  return (
    <div className="work-container">
      <h1 className='project-heading'>Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((val, ind) => {
          return (
            <Work
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Work1;
