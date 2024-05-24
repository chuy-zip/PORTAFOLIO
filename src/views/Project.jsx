import '@styles/Project.css';
import { useState, useEffect } from 'react';
import useNavigate from '@hooks/useNavigate';
import useProjectData from '@hooks/useProjectData';

function Project() {
    const { navigate } = useNavigate();
    const { ProjectData } = useProjectData();
    const [isHorizontal, setIsHorizontal] = useState(false);

    useEffect(() => {
        if (ProjectData.img) {
            const img = new Image();
            img.src = ProjectData.img;
            img.onload = () => {
                setIsHorizontal(img.width > img.height);
            };
        }
    }, [ProjectData.img]);

    return (
        <div className={isHorizontal ? "projectContainerColumn" : "projectContainer"} >
            <div className={isHorizontal ? "projectContainerColumn Photo" : "projectContainer Photo"}>
                <img src={ProjectData.img} alt="A project picture" />
            </div>
            <div className="projectContainerText">
                <h2 className='projectTitle'>{ProjectData.title}</h2>
                <h3 className='thirdTitle'>
                    <a  className='routeNav'
                        onClick={() => navigate('ProjectsSection')}
                    >ProjectsSection</a> {'>'} {ProjectData.extension}
                </h3>
                {ProjectData.technologies && (
                    <div className='techContainer'>
                        {ProjectData.technologies.map((tech, index) => (
                            <div key={index}>{tech}, &nbsp;

                            </div>
                        ))}
                    </div>
                )}
                <p className='projectDataContainer'>{ProjectData.description}</p>
            </div>
        </div>
    );
}

export default Project;
