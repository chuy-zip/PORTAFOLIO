import useNavigate from '@hooks/useNavigate'
import NavBar from '@components/NavBar'
import Start from '@views/Start'
import Project from '@views/Project'
import Paper from '@views/Paper'
import { ProjectDataProvider } from '@hooks/useProjectData'
import ReturnButton from '@components/ReturnButton'

const routes = {
    '/': {
        component: Start,
        isProject: false
    },
    'IntroSection': {
        component: Start,
        isProject: false
    },
    'AboutSection': {
        component: Start,
        isProject: false
    },
    'ProjectsSection': {
        component: Start,
        isProject: false
    },
    'SkillsSection': {
        component: Start,
        isProject: false
    },
    'AchievementsSection': {
        component: Start,
        isProject: false
    },
    'ContactSection': {
        component: Start,
        isProject: false
    },
    'PAPER': {
        component: Paper,
        isProject: false
    },
    'ProjectsSection/Blog': {
        component: Project,
        isProject: true
    },
    'ProjectsSection/Copython': {
        component: Project,
        isProject: true
    },
    'ProjectsSection/Physics': {
        component: Project,
        isProject: true
    },
    'ProjectsSection/SABOR': {
        component: Project,
        isProject: true
    },
    'ProjectsSection/SABTE': {
        component: Project,
        isProject: true
    },
}

function Router() {
    const { page } = useNavigate();

    const CurrentPage = routes[page]?.component || (() => (
        <div className='notFoundContainer'>
            <h1 className='h1Glow'>404 Page Not Found</h1>
            <h3> Please enter a valid URL</h3>
        </div>
    ));

    return (
        <div>
            {routes[page]?.isProject ? <ReturnButton /> : <NavBar />}
            
            <ProjectDataProvider>
                <CurrentPage />
            </ProjectDataProvider>
        </div>
    );
}


export default Router