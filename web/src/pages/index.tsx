import Button from '../components/Button/button'

import logIn from '../assets/log-in.svg'
import Logo from '../components/Logo/logo'
import Main from '../styles/home'
import Bg from '../assets/bg-home.svg'

const index = () => {
    return (
        <>
            <Logo/>
            <Main>
                <section>
                    <h1>Seu marketplace de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                    <Button size='Home'>
                        <span><img src={logIn} alt="log-in icon" /></span>
                        <span>Cadastre um ponto de coleta</span>
                    </Button>
                </section>
                
                <section>
                    <img src={Bg} alt="" />
                </section>
            </Main>
        </>
    )
}

export default index 