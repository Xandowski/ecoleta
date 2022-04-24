import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import styled, { css } from "styled-components"
import { InputButton } from "../../Button"
import Dropzone from "../../Dropzone"
import FieldSet from "../../FieldSet"

export type Point = {
  name: string
  email: string
  whatsapp: string
  number: number
  latitude: number
  longitude: number
  city: string
  uf: string
}

export type Item = {
  id: number;
  title: string;
  image_url: string;
}

export const BaseFormStyle = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;


  h3{
    width: 100%;
    margin: 40px 0;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 1.1rem;
  }

  section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    FieldSet {
      flex: 1;
      max-width: 192px;
      label {
        align-items: center;
      }
    }
    
  }

  @media (max-width: 700px) {
    h3 {
      display: block;
      font-size: 1.25rem;

      p {
        font-size: 0.950rem;
      }
    }
  }

`

const FormStyle = styled.form`
  ${BaseFormStyle}
`

const Form = () => {
  const [ items, setItems] = useState<Item[]>([])
  const [selectedFile, setSelectedFile] = useState<File>()
  
  const { handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data: Point): void => {
    console.log(data)
  }

  useEffect(() => {
    fetch('http://localhost:3333/items', { mode: 'cors', headers: {  
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*"  
  } })
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>

      <Dropzone onFileUploaded={setSelectedFile}/>

      <h3>Dados</h3>

      <FieldSet 
        htmlFor="entityName" 
        title="Nome da entidade"
      />

      <FieldSet 
        htmlFor="email" 
        title="Email"
      />

      <FieldSet 
        htmlFor="whatsapp" 
        title="Whatsapp"
        placeholder='( )'
      />

      <h3>Endereço</h3>
      
      <FieldSet 
        htmlFor="number" 
        title="Número"
      />
    
      <FieldSet 
        htmlFor="city" 
        title="Cidade"
      />

      <FieldSet 
        htmlFor="uf" 
        title="Estado"
      />

      <h3>Ítens de coleta <p>Selecione um ou mais ítens abaixo.</p></h3>
      
      <section>
        {
          items.map((item, index) => {
            return <FieldSet
                      key={index}
                      htmlFor="items"
                    >
                      <img src={item.image_url} alt={item.title} />
                      <p>{item.title}</p>
                    </FieldSet>
          })
        }
      </section>
      
      <InputButton color='green' value='Cadastrar ponto'/>

    </FormStyle>    
  )
}

export default Form