import { useEffect } from "react";
import Form from "../../components/Form/CreateForm";
import Header from "../../components/Header";
import Nav from "../../components/NavBar";
import Section from "../../components/Section";
import Main from "./styles";

const CreatePoint = () => {
  useEffect(() => {
    document.title = "Ecoleta | Criar Ponto";  
  }, []);

  return(
    <>
      <Header bg="white">
        <Nav
          to="/findpoint"
          title="Cadastrar ponto"
        />
      </Header>
      <Main>
        <Section>
          <h1>Cadastre um <br/> ponto de coleta.</h1>

          <Form/>
        </Section>
      </Main>
      
    </>
  )
}

export default CreatePoint