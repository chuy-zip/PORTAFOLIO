import pfp from '../assets/code.png'
function About() {
    return (
        <div id="AboutSection">
            <div className="grid-item photo">
                <img src={pfp} alt="A picture of me :)" />
            </div>
            <div className="grid-item text">
                <h2 className='secondTitle'>Who I'm I?</h2>
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

export default About