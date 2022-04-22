import { useForm } from "react-hook-form"
import styled from "styled-components"
import { InputButton } from "../Button/button"
import FieldSet from "../FieldSet/fieldSet"

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

const FormStyle = styled.form`
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
  
  @media (max-width: 700px) {
    h3 {
      display: block;
      font-size: 1.25rem;

      p {
        font-size: 0.9rem;
      }
    }
  }

`

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data: Point): void => {
    console.log(data)
  }
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <h3>Dados</h3>

      <FieldSet 
        htmlFor="entityName" 
        title="Nome da entidade"
        register={register}
      />

      <FieldSet 
        htmlFor="email" 
        title="Email"
        register={register}
      />

      <FieldSet 
        htmlFor="whatsapp" 
        title="Whatsapp"
        placeholder='( )'
        register={register}
      />

      <h3>Endereço</h3>
      
      <FieldSet 
        htmlFor="number" 
        title="Número"
        register={register}
      />
    
      <FieldSet 
        htmlFor="city" 
        title="Cidade"
        register={register}
      />

      <FieldSet 
        htmlFor="uf" 
        title="Estado"
        register={register}
      />

      <h3>Ítens de coleta <p>Selecione um ou mais ítens abaixo.</p></h3>
      
      
      <InputButton color='green' as='input'/>

    </FormStyle>    
  )
}

export default Form