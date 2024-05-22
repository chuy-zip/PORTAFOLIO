import ProjectCard from "@components/ProjectCard"
import pfp from '../assets/code.png'
import useNavigate from '@hooks/useNavigate';

function Projects(){

    const { navigate } = useNavigate()

    return (
        <div id="ProjectsSection">
        <h2 className='secondTitle'>Work</h2>
        <div className="ProjectsSectionContainer">
            <ProjectCard title={'Blog'} image={pfp} nav={navigate}/>
            <ProjectCard title={'Copython'} image={pfp} nav={navigate}/>
            <ProjectCard title={'Physics Simulation'} image={pfp}nav={navigate}/>
            <ProjectCard title={'SABOR'} image={pfp} nav={navigate}/>
            <ProjectCard title={'SABTE'} image={pfp} nav={navigate}/>
        </div>
        </div>
        
    )
}

export default Projects