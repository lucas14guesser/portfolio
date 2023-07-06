import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", icon: <a href='https://www.linkedin.com/in/lucas-guesser-9a5b5a270/' id='linkedin' target='_blank'><FaLinkedin /></a>  },
    { name: "github", icon: <a href='https://github.com/lucas14guesser' id='github' target='_blank'> <FaGithub /></a> },
    { name: "instagram", icon:<a href='https://instagram.com/lucas_sguesser' id='instagram' target='_blank'><FaInstagram /></a> },
]

const SocialNetworks = () => {
  return (
    <section id='social_networks'>
        {socialNetworks.map((network) => (
            <a href='#' className='social_btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks