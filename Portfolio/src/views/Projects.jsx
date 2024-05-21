import ProjectCard from "@components/ProjectCard"
import pfp from '../assets/code.png'

function Projects(){
    return (
        <div id="ProjectsSection">
        <h2 className='secondTitle'>Work</h2>
        <div className="ProjectsSectionContainer">
            <ProjectCard title={'Games blog'} image={pfp}/>
            <ProjectCard title={'Copython'} image={pfp}/>
            <ProjectCard title={'Physics Simulation'} image={pfp}/>
            <ProjectCard title={'SABOR'} image={pfp}/>
            <ProjectCard title={'SABTE'} image={pfp}/>
        </div>
        </div>
        
    )
}

export default Projects