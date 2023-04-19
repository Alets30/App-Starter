import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDragon  } from '@fortawesome/free-solid-svg-icons/faDragon'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat/static/Montserrat-Black.ttf'),
    'Montserrat': require('./assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf'),
  });
  return (
    <View style={estilos.contenedor}>
      <View style={[estilos.formulario, estilos.shadowProp]}>
        <FontAwesomeIcon style={estilos.icono} icon={ faDragon } />
        <Text style={estilos.titulo}>¡Bienvenido a mi aplicación!</Text>
        <TextInput label="Correo" style={estilos.input} placeholder="Correo electrónico" />
        <TextInput label="Contraseña" secureTextEntry style={estilos.input} placeholder="Contraseña"/>
        <TouchableOpacity style={estilos.boton}>
          <Text style={estilos.textoBoton}>Iniciar sesión</Text>
        </TouchableOpacity>
        <Text style={estilos.texto}>¿Aún no tienes una cuenta?</Text>
        <Text style={estilos.links}>¡Regístrate!</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formulario: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginVertical: 10
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  titulo: {
  marginBottom: "10px", 
  fontSize: '25px',
  fontFamily: 'Montserrat-Black',
  },
  texto: {
    fontSize: '12px',
    fontFamily: 'Montserrat',
    marginBottom: '10px'
  },
  input: {
    width: "100%", 
    padding: "10px", 
    marginBottom: "10px", 
    borderColor: "#bee8dd", 
    borderWidth: 2, 
    borderRadius: 5, 
    fontSize: '15px',
    fontFamily: 'Montserrat'
  },
  boton: {
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    fontSize: '20px',
    borderWidth: 3,
    borderRadius: 5,
    marginBottom: '15px'
  },
  textoBoton: {
    fontSize: '18px',
    fontFamily: 'Montserrat',
  },
  links: {
    fontSize: '12px',
    fontFamily: 'Montserrat',
    marginBottom: '10px',
    color: 'blue'
  }
});
