import useNavigate from '@hooks/useNavigate'
import NavBar from '@components/NavBar'
import Start from '@views/Start'
import Blog from '@views/Blog'



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
        component: Blog,
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
            <CurrentPage />
        </div>
    )
}

export default Router