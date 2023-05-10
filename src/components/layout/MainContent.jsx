import AboutContainer from '../pages/AboutContainer'
import TechnologiesContainer from '../pages/TechnologiesContainer'
import ProjectsContainer from '../pages/projectsContainer'
import '../styles/components/maincontent.sass'

const MainContent = () => {
  return (
    <main id='main_content'>
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContent