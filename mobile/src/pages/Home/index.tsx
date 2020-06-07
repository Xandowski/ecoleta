import React, { useState, useEffect, ChangeEvent } from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import * as Location from 'expo-location';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse{
  nome: string
}

const Home = () => {
  const navigation = useNavigation();
  
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const [coordinates, setCoordinates] =  useState<[number, number]>([0,0]);


  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla);
       setUfs(ufInitials);
      });
  }, []);

  useEffect(() => {
    if(selectedUf === '0'){
      return;
    }

    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome)

        setCities(cityNames);
      })
  }, [selectedUf])

  useEffect(() => {
    Location.geocodeAsync(`${selectedCity}, ${selectedUf}`)
      .then(response => {
        const latitude = response.map(coor => coor.latitude);
        const longitude = response.map(coor => coor.longitude);

        setCoordinates([latitude[0], longitude[0]])
      })
  }, [selectedCity])
  

  function handleNavigateToPoints(latitude: number, longitude: number) {
    navigation.navigate('Points', { lat: latitude, lon: longitude});
  }

  function handleSelectUF(value: string) {
    const uf = value

    setSelectedUf(uf);
  }

  function handleSelectCity(value: string) {
    const city = value;

    setSelectedCity(city);
  }


  return (

    <ImageBackground 
      source={require('../../assets/home-background.png')} 
      style={styles.container}
      imageStyle={{ width: 274, height:368 }}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')}/>
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>Ajuadmos pessoas a econtrarem pontos de coleta de resíduos</Text>
      </View>

      <RNPickerSelect 
        onValueChange={( value ) => handleSelectUF(value)}
        items={ufs.map(uf => (
            { key: uf, label: uf, value: uf }
          ))}
      />
      <RNPickerSelect 
        onValueChange={( value ) => handleSelectCity(value)}
        items={
          cities.map(city => (
            {key: city, label: city, value: city}
          ))
        }
      />


      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => handleNavigateToPoints(coordinates[0], coordinates[1])}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color ="#FFF" size={24}/>
            </Text>
          </View>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {
  },

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 18,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home;