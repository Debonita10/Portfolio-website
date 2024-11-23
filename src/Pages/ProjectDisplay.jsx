import React from 'react'
import ProjectDisplay from "../Components/Projectlist";



function ProjectDisplay () {
    const project = Projectlist;
  return (
    <>
    <div className="project">
    <h1> {project.name}</h1>
    <img src={project.image} />
    <p>
      <b>Skills:</b> {project.skills}
    </p>
   
  </div>
    <div>ProjectDisplay</div>
    </>
  )
}

export default ProjectDisplay