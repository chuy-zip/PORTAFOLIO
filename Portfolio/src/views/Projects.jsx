import ProjectCard from "@components/ProjectCard"
import useNavigate from '@hooks/useNavigate';

import BlogImg from '@assets/tecBlog.png'
import CopythonImg from '@assets/tecCopython.png'
import PhysicsImg from '@assets/tecPhysics.png'
import SABORImg from '@assets/tecSabor.png'
import SABTEImg from '@assets/tecSabte.png'

function Projects(){

    const { navigate } = useNavigate()

    return (
        <div id="ProjectsSection">
        <h2 className='secondTitle'>Work</h2>
        <div className="ProjectsSectionContainer">
            <ProjectCard title={'Blog'} image={BlogImg} nav={navigate}/>
            <ProjectCard title={'Copython'} image={CopythonImg} nav={navigate}/>
            <ProjectCard title={'Physics'} image={PhysicsImg}nav={navigate}/>
            <ProjectCard title={'SABOR'} image={SABORImg} nav={navigate}/>
            <ProjectCard title={'SABTE'} image={SABTEImg} nav={navigate}/>
        </div>
        </div>
        
    )
}

export default Projects