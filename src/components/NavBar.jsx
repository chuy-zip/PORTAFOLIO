import useNavigate from '@hooks/useNavigate';

function NavBar() {
    const { page, navigate } = useNavigate();

    return (
        <div className="navbar">
            <a 
                className={page === 'IntroSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('IntroSection')}
            >
                Introduction
            </a>
            <a 
                className={page === 'AboutSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('AboutSection')}
            >
                About me
            </a>
            <a 
                className={page === 'ProjectsSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('ProjectsSection')}
            >
                Projects
            </a>
            <a 
                className={page === 'SkillsSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('SkillsSection')}
            >
                Skills
            </a>
            <a 
                className={page === 'AchievementsSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('AchievementsSection')}
            >
                Achievements
            </a>
            <a 
                className={page === 'ContactSection' ? 'selectedNav' : 'navbarStyle2'} 
                onClick={() => navigate('ContactSection')}
            >
                Contact
            </a>   
        </div>
    );
}

export default NavBar;
