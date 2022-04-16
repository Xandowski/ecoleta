import styled from 'styled-components'
import AppLogo from '../../assets/Logo.svg'

const LogoStyle = styled.img`
     @media(min-width: 300px) {
       width: 100px;
       height: 10vh;
       margin: 0 0 0 25px;
    }

    @media(min-width: 700px) {
        margin: 35px 0 0 130px;
      
        width: 180px;
    }
    @media(min-width: 1024px) {
        margin: 46px 0 0 160px;
        width: 180px;
    }
`

const Logo = () => <LogoStyle src={AppLogo} alt="logo" />

export default Logo