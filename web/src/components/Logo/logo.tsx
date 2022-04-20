import styled from 'styled-components'
import AppLogo from '../../assets/Logo.svg'

const LogoStyle = styled.img`
    
    @media(min-width: 300px) {
       width: 100px;
       height: 24px;
       margin: 15px 0 20px 27px;
    }

    @media(min-width: 700px) {
        width: 160px;
        height: 30px;
    }

    @media(min-width: 1024px) {
        margin: 46px 0 0 80px;
    }

    @media(min-width: 1440px) {
        height: 50px;
        margin: 46px 0 0 100px;
        width: 180px;
    }
`

const Logo = () => <LogoStyle src={AppLogo} alt="logo" />

export default Logo