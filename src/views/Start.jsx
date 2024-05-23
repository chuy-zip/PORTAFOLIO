import { useEffect } from 'react';
import Intro from '@views/Intro';
import About from '@views/About';
import Projects from '@views/Projects';
import Skills from '@views/Skills';
import Achievements from '@views/Achievements';
import Contact from '@views/Contact';

function Start() {
    useEffect(() => {
        const scrollToSection = () => {
            const hash = window.location.hash.substring(1);
            if (hash) {
                const element = document.getElementById(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        scrollToSection();

        window.addEventListener('hashchange', scrollToSection);

        return () => {
            window.removeEventListener('hashchange', scrollToSection);
        };
    }, []);

    return (
        <>
            <div className="startContainer">
                <Intro id="IntroSection" />
                <About id="AboutSection" />
                <Projects id="ProjectsSection" />
                <Skills id="SkillsSection" />
                <Achievements id="AchievementsSection" />
                <Contact id="ContactSection" />
            </div>
        </>
    );
}

export default Start;
