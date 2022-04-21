import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

type KnownTags = keyof JSX.IntrinsicElements

interface ButtonProps {
    as?: KnownTags
    to?: string
    color?: string
    size?: string
    children?: React.ReactNode | string
  }

const ButtonStyle = css<ButtonProps>`
    background-color: ${(props) => (props.color === 'green' ? ({theme}) => theme.colors.buttonColor : ({theme}) => theme.colors.secondaryButtonColor)};
    width: ${ (props) => (props.size == 'home' ? "360px" : "266px")};
    height: ${ (props) => (props.size == 'home' ? "72px" : "56px")};
    border: none;
    font-family: ${({theme}) => theme.fonts.text};
    font-weight: ${({theme}) => theme.textWeight.title};
    font-size: 0.8rem;
    color: #FFF;
    display: flex;
    align-items: center;
    border-radius: 8px;

    span:nth-child(1) {
        width: 72px;
        height: 100%;
        border-radius: 8px 0px 0px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => (props.color === 'green' ? ({theme}) => theme.colors.buttonColorDark : ({theme}) => theme.colors.secondaryButtonColorDark)};
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

export const LinkButton = styled(Link)`
    ${ButtonStyle}
`

export const InputButton = styled.input.attrs({ type: 'submit', value: 'Cadastrar ponto'})`
    ${ButtonStyle}
    justify-content: center;

    @media(min-width: 300px) {
        width: 100%;
    }
`

const Button = ({to, color, size, children, as}: ButtonProps) => {
    if (to) {
        return (
            <LinkButton to={to} color={color} size={size}>
                {children}
            </LinkButton>
        )
    }

    return (
        <InputButton color={color} as={as}>
            {children}
        </InputButton>
    )
}

export default Button