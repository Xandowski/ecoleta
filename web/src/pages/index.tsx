import Bg from '../assets/bg-home.svg'
import logIn from '../assets/log-in.svg'
import Button from '../components/Button/button'
import Header from '../components/Header/header'
import Main from '../styles/home'

const index = () => {
    return (
        <>  
            
            <Header/>
            <Main>
                <section>
                    <h1>Seu marketplace <br/> de coleta de resíduos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos <br/> de coleta de forma eficiente.</p>
                    <Button to="/createpoint" color='green' size='home'>
                        <span><img src={logIn} alt="log-in icon" /></span>
                        <span>Cadastre um ponto de coleta</span>
                    </Button>
                    <Button to="/findpoint" color='purple' size='home'>
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