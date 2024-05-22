import useNavigate from '@hooks/useNavigate'
import NavBar from '@components/NavBar'
import Start from '@views/Start'



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
}

function Router() {

    const { page } = useNavigate()

    let CurrentPage = () => (
        <div className='notFoundContainer'>
            <h1 className='h1Glow'>404 Página no encontrada</h1>
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