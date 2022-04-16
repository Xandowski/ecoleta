import styled from 'styled-components'
import AppLogo from '../../assets/Logo.svg'

const LogoStyle = styled.img`
     @media(min-width: 300px) {
       width: 100px;
       height: 10vh;
       margin: 0 0 0 25px;
    }

    @media(min-width: 300px) {
        margin: 46px 0 0 150px;
    }
`

const Logo = () => <LogoStyle src={AppLogo} alt="logo" />

export default Logo