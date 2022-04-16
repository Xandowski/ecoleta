import Button from '../components/Button/button'

import logIn from '../assets/log-in.svg'
import Logo from '../components/Logo/logo'
import Main from '../styles/home'
import { Link } from 'react-router-dom'

const index = () => {
    return (
        <>
            <Logo/>
            <Main>
                <section>
                    <h1>Seu marketplace <br/> de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos <br/> de coleta de forma eficiente.</p>
                    <Button to="/createpoint" size='Home'>
                        <span><img src={logIn} alt="log-in icon" /></span>
                        <span>Cadastre um ponto de coleta</span>
                    </Button>
                </section>
            </Main>
        </>
    )
}

export default index 