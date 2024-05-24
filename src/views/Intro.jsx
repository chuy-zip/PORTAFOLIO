import git from '@assets/gitIcon.png'
function Intro() {
    return (
        <div id="IntroSection">
            <h1> RICARDO CHUY</h1>
            <h3> COMPUTER SCIENTIST AND SOFTWARE DEVELOPER</h3>
            <figure className="gitIcon">
                <a href="https://github.com/chuy-zip">
                    <img src={git} className='gallery_img' />
                </a>
            </figure>
        </div>
    )
}

export default Intro