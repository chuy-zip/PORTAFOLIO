import '@styles/Project.css'
import useNavigate from '@hooks/useNavigate';
import useProjectData from '@hooks/useProjectData';

function Project() {
    const { navigate } = useNavigate()
    const { ProjectData } = useProjectData()

    return (
        <div className="projectContainer">

            <div className="projectContainer Photo">
                <img src={ProjectData.img} alt="A project picture" />
            </div>

            <div className="projectContainerText">
                <h2 className='projectTittle'>{ProjectData.title}</h2>

                <h3 className='thirdTitle'>
                    <a href="#IntroSection"
                        className='routeNav'
                        onClick={() => navigate('IntroSection')}
                    >ProjectsSection</a> {'>'} {ProjectData.extension}
                </h3>

                <p>{ProjectData.description}</p>
            </div>
        </div>
    )
}

export default Project