import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'


const InformationContainer = () => {
  return (
    <section id='information_container'>
        <div className='info_card'>
            <AiFillPhone id='phone_icon' />
            <div>
                <h3>Telefone</h3>
                <p>(48)99618-3486</p>
            </div>
        </div>
        <div className='info_card'>
            <AiOutlineMail id='email_icon' />
            <div>
                <h3>E-mail</h3>
                <p>lucas14guesser@gmail.com</p>
            </div>
        </div>
        <div className='info_card'>
            <AiFillEnvironment id='pin_icon' />
            <div>
                <h3>Localização</h3>
                <p>Biguaçú / SC</p>
            </div>
        </div>
    </section>
  )
}

export default InformationContainer