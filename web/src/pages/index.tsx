import Bg from '../assets/bg-home.svg'
import logIn from '../assets/log-in.svg'
import Button from '../components/Button/button'
import Logo from '../components/Logo/logo'
import Main from '../styles/home'

const index = () => {
    return (
        <>  
            
            <Logo/>
            <Main>
                <section>
                    <h1>Seu marketplace <br/> de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos <br/> de coleta de forma eficiente.</p>
                    <Button to="/createpoint" color='green' page='Home'>
                        <span><img src={logIn} alt="log-in icon" /></span>
                        <span>Cadastre um ponto de coleta</span>
                    </Button>
                    <Button to="/findpoint" color='purple' page='Home'>
                        <span><img src={logIn} alt="log-in icon" /></span>
                        <span>Encontre um ponto de coleta</span>
                    </Button>
                </section>

                <section>
                    <img src={Bg} alt="background" />
                </section>
            </Main>
        </>
    )
}

export default index 