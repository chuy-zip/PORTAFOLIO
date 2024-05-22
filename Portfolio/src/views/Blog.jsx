import '@styles/Project.css'
import pfp from '../assets/pa.jpg'
import useNavigate from '@hooks/useNavigate';


function Blog() {
    const { navigate } = useNavigate

    return (
        <div className="projectContainer">

            <div className="projectContainer Photo">
                <img src={pfp} alt="A picture of me :)" />
            </div>
            <div className="projectContainerText">
                <h2 className='projectTittle'>Who I'm I?</h2>
                <h3 className='thirdTitle'>
                    <a href="#IntroSection"
                        className='routeNav'
                        onClick={() => navigate('IntroSection')}
                    >ProjectsSection</a> {'>'} Blog</h3>

                <p>I consider myself an adaptable and perseverant individual,
                    always striving to perform activities to the best of my ability.
                    I enjoy helping others and continually seek new experiences,
                    opportunities, and challenges that enable me to learn and
                    grow as a professional. This constant pursuit of growth helps me build
                    my character and expand my experience. I enjoy using my creativity and knowledge
                    to solve problems with effective and practical solutions, via code.</p>
            </div>
        </div>
    )
}

export default Blog