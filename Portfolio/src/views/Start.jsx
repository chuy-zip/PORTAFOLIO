import Intro from '@views/Intro'
import About from '@views/About'
import Projects from '@views/Projects'
import Skills from '@views/Skills'
import Achievements from '@views/Achievements'
import Contact from '@views/Contact'

function Start() {
    return (
        <>
            <div className="startContainer">
                <Intro />
                <About />
                <Projects />
                <Skills />
                <Achievements />
                <Contact />
            </div>
        </>
    )
}

export default Start    