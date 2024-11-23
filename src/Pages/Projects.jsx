import React from 'react'
import {Projectlist} from '../Components/Projectlist';
import ProjectItem from '../Components/ProjectItem';
import '../Styles/Projects.css';

function Projects () {
  return (
    <div className='projects'>
<h1>My Personal Projects</h1>
<div className='Projectlist'>
 {Projectlist.map ((project)=>{
  return <ProjectItem name={project.name} image={project.image}/>
 })



 }
</div>



    </div>
  )
}

export default Projects