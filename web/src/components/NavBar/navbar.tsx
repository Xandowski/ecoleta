import styled from "styled-components"
import Logo from '../Logo/logo'
// import LeftArrow from '../../assets/leftArrow.svg'

export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background-color: ${({theme}) => theme.colors.background};

  @media(min-width: 300px) {
    height: 60px;
    span {
      display: flex;
      justify-content: space-between;
      font-family: ${({theme}) => theme.fonts.text};
      width: 100px;
    }     
  }
`

export const Nav = () => {
  return (
    <NavBarStyle>
      <Logo/>
      <span>
        {/* <LeftArrow/> */}
        Voltar para home
      </span>
    </NavBarStyle>
  )
}

export default Nav