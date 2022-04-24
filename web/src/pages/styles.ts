import styled from 'styled-components'

const Main = styled.main`
    height: 85vh;
    
    flex-wrap: wrap;

    h1 {
        font-size: 1.8rem;
        line-height: 2rem;
        color: ${({theme}) => theme.colors.title};
    }

    p {
        font-size: 0.9rem;
        color: ${({theme}) => theme.colors.text};
    }
    
    section:nth-child(2) {
        img {
            width: 100%;
        }
    }

    @media(min-width: 300px) {
        padding: 0 27px;
        section {
            display: flex;
            width: 100%;
            h1, p {
                width: 266px;
            }
        }

        section:nth-child(1) {
            flex-direction: column;
            justify-content: space-around;
           
        }

        section:nth-child(2) {
            justify-content: center;
            align-items: flex-end;
        }
    }

    @media(min-width: 700px) {
        padding: 0 50px;
        align-items: center;
        section:nth-child(1) {
            justify-content: center;

            h1, p {
                width: 100%;
                margin-bottom: 24px;
            }

            
            p{
                font-size: 1.150rem;
            }

            > a {
                margin-top: 16px;
            }
           
        }

        section {
            width: 50%;
            height: 80%;
        }
        section:nth-child(2) {
            align-items: center;
        }
    }

    @media(min-width: 1440px) {
        padding: 0 160px;
        section:nth-child(1) {
            h1 {
                font-size: 3.1rem;
                line-height: 4rem;
            }

            p {
                font-size: 2.3rem;
            }

            h1 {
                font-size: 4rem;
            }
            
            > a {
                margin-top: 16px;
            }

        }
    }

    @media(min-width: 1024px){
        padding: 0 100px;
        
        section:nth-child(1) {
            > a {
                margin-top: 16px;
            }
        }
    }

`

export default Main



