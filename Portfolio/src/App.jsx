
import '@styles/App.css'
import Start from '@views/Start.jsx'
import NavBar from '@components/NavBar.jsx'
import { NavigationProvider } from '@hooks/useNavigate'
function App() {

  return (
      <NavigationProvider>
        <NavBar />
        <Start />
      </NavigationProvider>
  )
}

export default App
