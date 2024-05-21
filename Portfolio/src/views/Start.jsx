import Intro from '@views/Intro'
import About from '@views/About'
import Projects from '@views/Projects'
import Skills from '@views/Skills'
import Awards from '@views/Awards'
import Contact from '@views/Contact'

function Start() {
    return (
        <>
            <div className="startContainer">
                <Intro />
                <About />
                <Projects />
                <Skills />
                <Awards />
                <Contact />
            </div>
        </>
    )
}

export default Start    