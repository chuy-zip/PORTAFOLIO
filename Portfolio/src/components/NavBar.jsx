import useNavigate from '@hooks/useNavigate';

function NavBar() {
    const { page, navigate } = useNavigate();

    return (
        <div className="navbar">
            <a 
                href="#IntroSection" 
                className={page === 'IntroSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('IntroSection')}
            >
                Introduction
            </a>
            <a 
                href="#AboutSection" 
                className={page === 'AboutSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('AboutSection')}
            >
                About me
            </a>
            <a 
                href="#ProjectsSection" 
                className={page === 'ProjectsSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('ProjectsSection')}
            >
                Projects
            </a>
            <a 
                href="#SkillsSection" 
                className={page === 'SkillsSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('SkillsSection')}
            >
                Skills
            </a>
            <a 
                href="#AchievementsSection" 
                className={page === 'AchievementsSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('AchievementsSection')}
            >
                Achievements
            </a>
            <a 
                href="#ContactSection" 
                className={page === 'ContactSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('ContactSection')}
            >
                Contact
            </a>   
        </div>
    );
}

export default NavBar;
