import useNavigate from '@hooks/useNavigate'
import NavBar from '@components/NavBar'
import Start from '@views/Start'
import Project from '@views/Project'
import { ProjectDataProvider } from '@hooks/useProjectData'


const routes = {
    '/': {
        component: Start,
    },
    'IntroSection': {
        component: Start,
    },
    'AboutSection': {
        component: Start,
    },
    'ProjectsSection': {
        component: Start,
    },
    'SkillsSection': {
        component: Start,
    },
    'AchievementsSection': {
        component: Start,
    },
    'ContactSection': {
        component: Start,
    },
    'ProjectsSection/Blog': {
        component: Project,
    },
    'ProjectsSection/Copython': {
        component: Project,
    },
    'ProjectsSection/Physics': {
        component: Project,
    },
    'ProjectsSection/SABOR': {
        component: Project,
    },
    'ProjectsSection/SABTE': {
        component: Project,
    },
}

function Router() {

    const { page } = useNavigate()

    let CurrentPage = () => (
        <div className='notFoundContainer'>
            <h1 className='h1Glow'>404 Page Not found</h1>
            <h3> Please enter a valid URL</h3>
        </div>
    )

    if (routes[page]) {
        CurrentPage = routes[page].component
        window.location.replace(`/#${page}`);
    }

    return (
        <div>
            <NavBar />
            <ProjectDataProvider>
                <CurrentPage />
            </ProjectDataProvider>
        </div>
    )
}

export default Router