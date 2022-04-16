import styled from 'styled-components'

const Main = styled.main`
    @media(min-width: 300px) {
        width: 100vw;
        height: 90vh;

        section:nth-child(1) {
            height: 50%;
            margin: 0 25px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            h1 {
                font-family: ${({theme}) => theme.fonts.title};
                font-weight: 700;
                font-size: 1.8rem;
                line-height: 2rem;
            }

            p {
                font-family: ${({theme}) => theme.fonts.text};
                font-weight: 400;
                font-size: 0.9rem;
            }
        }

        section:nth-child(2) {
            height:  50%;
            display: flex;
            align-items: flex-end;

            img {
                width: 100%;
                @media(min-height: 400px) {
                    height: 100%
                }
            }
        }
    }

    @media(min-width: 700px) {
        section:nth-child(1) {
            margin: 0 150px;

            h1 {
                font-size: 2rem;
                line-height: 2.5rem;
            }

            p {
                font-size: 1.2rem;
            }
        }
    }
`

export default Main