import { Link } from 'react-router-dom'
import styled from 'styled-components'
interface ButtonProps {
    to: string
    color: string
    page: string
    children: React.ReactNode
  }

const ButtonStyle = styled(Link)<ButtonProps>`
    background-color: ${({theme}) => theme.colors.buttonColor};
    background-color: ${(props) => (props.color === 'green' ? ({theme}) => theme.colors.buttonColor : ({theme}) => theme.colors.secondaryButtonColor)};
    width: ${ (props) => (props.page == 'home' ? "360px" : "266px")};
    height: ${ (props) => (props.page == 'home' ? "72px" : "56px")};
    border: none;
    font-family: ${({theme}) => theme.fonts.text};
    font-weight: ${({theme}) => theme.textWeight.title};
    font-size: 0.75rem;
    color: #FFF;
    display: flex;
    align-items: center;
    border-radius: 8px;

    span:nth-child(1) {
        width: 72px;
        height: 100%;
        background-color: ${(props) => (props.color === 'green' ? ({theme}) => theme.colors.buttonColorDark : ({theme}) => theme.colors.secondaryButtonColorDark)};
        border-radius: 8px 0px 0px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    span:nth-child(2) {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    &:hover {
        cursor: pointer;
    }
`

const Button = ({to, color, page, children}: ButtonProps) => {
    return (
        <ButtonStyle to={to} color={color} page={page}>
            {children}
        </ButtonStyle>
    )
}

export default Button