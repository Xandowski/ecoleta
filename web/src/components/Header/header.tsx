import styled from 'styled-components'
import Logo from '../../assets/Logo.svg'

export type HeaderProps = {
  children?: React.ReactNode | string
}

const HeaderStyle = styled.header<HeaderProps>`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 300px) {
    padding: 27px;

    img {
      width: 100px;
    }
  }

  @media (min-width: 700px) {
    padding: 27px 50px 27px 50px;
  }

  @media (min-width: 500px) {
    img {
      width: 140px;
    }
  }

  @media (min-width: 1024px) {
    padding: 46px 100px 30px 100px;
    img {
      width: 180px;
      height: 44px;
    }
  }
`


const Header = ({children}: HeaderProps) => {
  return (
    <HeaderStyle >
      <img src={Logo} alt="Logo" />
      {children}
    </HeaderStyle>
  )
}

export default Header