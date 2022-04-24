import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Form, { Select } from "../../components/Form/FindForm";
import Header from "../../components/Header";
import Nav from "../../components/NavBar";
import Section from "../../components/Section";
import Main from "../CreatePoint/styles";

export type UfsProps = {
  id: number
  nome: string
  regiao: {id: number, sigla: string, nome: string}
  sigla: string
}

export type CitiesProps = {

}

const FindPoint = () => {
  const [ufs, setUfs] = useState<UfsProps[]>([])
  const [selectedUf, setSelectedUf] = useState('0')
  const [cities, setCities] = useState<string[]>([])

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  useEffect(() => {
    document.title = "Ecoleta | Encontrar Ponto"  
  }, [])

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados', 
    { mode: 'cors', 
      headers: {  
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*"  
      }
    }).then(response => {
        const ufInitials = response.json()
        return ufInitials
      })
      .then(ufInitials => {
        setUfs(ufInitials)
      })
  }, [])

  useEffect(() => {
    if(selectedUf === '0'){
      return
    }

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`, 
    { mode: 'cors', 
      headers: {  
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Origin": "*"  
      }
    }).then(response => {
        const selectedUfCities = response.json()
        return selectedUfCities
      })
      .then(selectedUfCities => {
        const cityNames = selectedUfCities.map((city) => {
          return city.nome
        })
        setCities(cityNames)
      })
  }, [selectedUf])

  
  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value

    setSelectedUf(uf)
  }

  const onSubmit = (data: {uf: string, city: string}): void => {
    //fazer a requisição para trazer os pontos
    console.log(data)
  }

  return(
    <>
      <Header bg="white">
        <Nav
          to="/createpoint"
          color="green"
          title="Cadastrar ponto"
        />
      </Header>
      <Main>
        <Section>
          <h1>Encontre um <br/> ponto de coleta.</h1>

          <Form
            onSubmitFunc={handleSubmit(onSubmit)}
          >
             <Select 
                {...register('uf', { required: true })}
                onChange={handleSelectUf}
              >
              {
                ufs.map((uf, index) => {
                  return (
                    <option 
                      key={index} 
                      value={uf.sigla}
                    >
                      {uf.nome}
                    </option>
                  )
                })
              }
            </Select>

            <Select 
              {...register('city', { required: true })}
            >
              {
                cities.map((city, index) => {
                  return (
                    <option
                      key={index} 
                      value={city}
                    >{city}
                      
                    </option>
                  )
                })
              }  
            </Select>
          </Form>
        </Section>
      </Main>
    </>
  )
}

export default FindPoint