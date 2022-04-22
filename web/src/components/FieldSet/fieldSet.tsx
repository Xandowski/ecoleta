import { FieldValues, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'

type FieldSetProps = {
  htmlFor: string
  title: string
  placeholder?: string
  register: UseFormRegister<FieldValues>
}

const FieldSetStyle = styled.fieldset`
  border: none;
  width: 100%;
  
  input {
    border: none;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.background};
    padding: 5px;
    margin-top: 8px;
    height: 56px;


    @media (max-width: 700px) {
      height: 30px;
    }
  }

  label {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
  }

  input, label {
    width: 100%;
  }

  &:nth-child(6),
  &:nth-child(8)  {
    width: 30%;
  }

  &:nth-child(7) {
    width: 65%;
  }
` 

const FieldSet = ({htmlFor, title, placeholder, register}: FieldSetProps) => {
  
  return (
    <FieldSetStyle>
      <label htmlFor={htmlFor}>
        {title}
        <input {...register(`${htmlFor}`, { required: true })} placeholder={placeholder}/>
      </label>
    </FieldSetStyle>
  )
}

export default FieldSet