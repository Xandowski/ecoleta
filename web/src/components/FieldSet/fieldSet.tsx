import { FieldValues, UseFormRegister } from 'react-hook-form'
import styled from 'styled-components'

type FieldSetProps = {
  htmlFor?: string
  title?: string
  placeholder?: string
  register: UseFormRegister<FieldValues>
  children?: React.ReactNode | string
}

const Input = styled.input.attrs({
  type: "checkbox"
})``



const FieldSetStyle = styled.fieldset<FieldSetProps>`
  border: none;
  width: 100%;
  
  input {
    border: none;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.background};
    background-size: contain;
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
    cursor:pointer;
  }

  input:checked + div{
    border: 2px solid ${({theme}) => theme.colors.buttonColor};
  }

  :nth-child(10){
    
    display: block;
  }

  div {
    background-color: ${({theme}) => theme.colors.itemBackground};
    width: 192px;
    height: 184px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;

    p {
      font-size: 1rem;
    }
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

const FieldSet = ({htmlFor, title, placeholder, register, children}: FieldSetProps) => {
  if(title){
    return (
      <FieldSetStyle>
        <label htmlFor={htmlFor}>
          {title}
          <input {...register(`${htmlFor}`, { required: true })} placeholder={placeholder}/>
        </label>
      </FieldSetStyle>
    )
  }

  return (
    <FieldSetStyle>
      <label>
        <Input {...register(`${htmlFor}`, { required: true })} hidden/>
        <div>
          {children}
        </div>
      </label>
    </FieldSetStyle>
  )
}

export default FieldSet