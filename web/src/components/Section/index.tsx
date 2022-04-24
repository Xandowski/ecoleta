import styled from "styled-components"
import Bg from '../../assets/ecoleta-bg.svg'

type SectionProps = {
  children: React.ReactNode
}

const SectionStyle = styled.section`
  /* TODO */
  /* background: white url(${Bg}) no-repeat top center;
  background-size: 40vw; */
  background-color: white;
  width: 80vw;
  max-width: 736px;
  padding: 64px;
  border-radius: 8px;

  margin-top: 40px;

  @media(max-width: 700px) {
    padding: 8px;
  
    h1 {
      font-size: 1.7rem;
    }
  }
`

const Section = ({children}: SectionProps) => {
  return (
    <SectionStyle>
      {children}
    </SectionStyle>
  )
}

export default Section