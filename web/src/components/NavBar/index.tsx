import { Link } from "react-router-dom"
import styled from "styled-components"
import Button, { ButtonProps } from "../Button"

export interface NavProps extends ButtonProps  {
  title?: string
}

export const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 28px;
  }

  @media(min-width: 300px) {
    width: 150px;

    a:first-child {
      font-size: 0.875rem;
    }
  }

  @media(min-width: 500px) {
    width: 180px;

    a:first-child {
      font-size: 1.2rem;
    }
  }
`

export const Nav = ({to, color, title}:NavProps) => {
  return (
    <NavBarStyle>
      <Link to='/' >Início</Link>
      <Button color={color} to={to} >{title}</Button>
    </NavBarStyle>
  )
}

export default Nav