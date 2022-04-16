import styled from 'styled-components'

interface ButtonProps {
    size: string
    children: React.ReactNode
  }

const ButtonStyle = styled.button<ButtonProps>`
    background-color: ${({theme}) => theme.colors.buttonColor};
    width: ${ (props) => (props.size == 'home' ? "360px" : "266px")};
    height: ${ (props) => (props.size == 'home' ? "72px" : "56px")};
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
        background-color: ${({theme}) => theme.colors.buttonColorDark};
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

const Button: React.FC<ButtonProps> = ({size, children}: ButtonProps) => {
    return (
        <ButtonStyle size={size}>
            {children}
        </ButtonStyle>
    )
}

export default Button