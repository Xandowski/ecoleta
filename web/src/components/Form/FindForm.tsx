
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { InputButton } from "../Button/button"
import FieldSet from "../FieldSet/fieldSet"
import { BaseFormStyle } from './CreateForm'

export type FormProps = {
  children: JSX.Element[]
  onSubmitFunc?: Function
}

const FindFormStyle = styled.form`
  ${BaseFormStyle}

  fieldset {
    width: 48%;
    
  }
  
  @media(max-width: 500px) {
    fieldset {
      min-width: 250px;
    }
  }
`

export const Select = styled.select`
  background-color: ${({theme}) => theme.colors.background};
  border: none;
  border-radius: 8px;
  width: 100%;
  height: 56px;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  padding: 20px;
  line-height: 1.1;

  &::-ms-expand {
    display: none;
  }

  option {
    border: none;
    outline: none;
  }

  &:active {
    outline: ${({theme}) => theme.colors.itemBackground};
    border: 1px solid ${({theme}) => theme.colors.itemBackground};
  }
`

const Form = ({children, onSubmitFunc}: FormProps ) => {
  const { formState: { errors } } = useForm()
  
  return (
    <FindFormStyle onSubmit={onSubmitFunc}>
      <h3>Selecione</h3>

      <FieldSet
        htmlFor="uf"
        placeholder='Selecione o estado'
        select={true}
      >
       {children[0]}
      </FieldSet>

      <FieldSet
        htmlFor="city"
        placeholder='Selecione a cidade'
        select={true}
      >
        {children[1]}
      </FieldSet>

      <InputButton value='Econtrar ponto'/>
    </FindFormStyle>
  )
}

export default Form