import Avatar from '../img/eu.jpg'

import InformationContainer from '../pages/InformationContainer'
import SocialNetworks from '../pages/SocialNetworks'

import '../styles/components/sidebar.sass'

const SideBar = () => {
  return (
      <aside id="sidebar">
        <img src={Avatar} alt='Lucas Guesser'/>
        <p className="title">Desenvolvedor de sistemas</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://docs.google.com/document/d/1YQ6iRuXJiVrcO3ALxbmGqd-WcJ6C2gQWJKO6ex4A2Bk/edit" className="btn" target='_blank'>Download currículo</a>
      </aside>
    )
}

export default SideBar