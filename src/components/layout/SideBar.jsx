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
        <a href="" className="btn">Download currículo</a>
      </aside>
    )
}

export default SideBar