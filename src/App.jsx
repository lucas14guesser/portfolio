import SideBar from './components/layout/SideBar'
import MainContent from './components/layout/MainContent'

import './components/styles/components/app.sass'


function App() {
  return (
    <div id='portfolio'>
      <h1>Lucas da Silva Guesser</h1>
      <SideBar />
      <MainContent />
    </div>
  )
}

export default App