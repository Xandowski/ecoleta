import styled from 'styled-components'
import Bg from '../assets/bg-home.svg'

const Main = styled.main`
    width: 100vw;
    height: 90vh;
    @media(min-width: 300px) {
        background-image: url(${Bg});
        background-repeat: no-repeat;
        background-size: 100vw;
        background-position: bottom;
        padding: 25px 25px 0 25px;

        section:nth-child(1) {
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            button {
                align-self: center;
            }

            h1 {
                font-family: ${({theme}) => theme.fonts.title};
                font-weight: 700;
                font-size: 1.8rem;
                line-height: 2rem;
                color: ${({theme}) => theme.colors.title};
            }

            p {
                font-family: ${({theme}) => theme.fonts.text};
                font-weight: 400;
                font-size: 0.9rem;
                color: ${({theme}) => theme.colors.text};
            }
        }
    }

    @media(min-width: 700px) {
        padding: 60px 130px 0 130px;
        background-size: 100vw 45vh;
        
        section:nth-child(1) {
            h1 {
                font-size: 2rem;
                line-height: 2.5rem;
            }

            button {
                align-self: flex-start;
            }

            p {
                font-size: 1.2rem;
            }
        }
    }

    @media(min-width: 1024px) {
        display: flex;
        padding: 70px 160px 0 160px;
        background-repeat: no-repeat;
        background-position: top right 150px;
        background-size: 45vw;
        section:nth-child(1) {
            align-items: flex-start;
            width: 50%;

            h1 {
                font-size: 3.1rem;
                line-height: 4rem;
            }

            p {
                font-size: 1.4rem;
                /* width: 85%; */
            }
        }
    }
`

export default Main