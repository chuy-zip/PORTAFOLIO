function ProjectCard({ title, image, nav }) {
    return (
        <div>
            <div className="projectCardContainer" onClick={ () => nav(`#ProjectsSection/${title}`)}>
                <div className="cardHeader">
                    <div className="cardHeader photo">
                        <img src={image} alt="project picture" />
                    </div>
                </div>
                <h3 style={{ paddingLeft: '20px' }}>{title}</h3>
            </div>
        </div>
    )
}

export default ProjectCard