import Intro from '@views/Intro'
import About from '@views/About'

function Start() {
    return (
        <>
            <div className='navSpace'></div>
            <div className="startContainer">
                <Intro />
                <About />
            </div>
        </>
    )
}

export default Start    