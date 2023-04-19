import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export default function App() {
  return (
    <View style={estilos.contenedor}>
      <View style={estilos.formulario}>
        <Text style={estilos.titulo}>¡Bienvenido a mi aplicación!</Text>
        <TextInput style={estilos.input} placeholder="Correo electrónico"/>
        <TextInput style={estilos.input} placeholder="Contraseña"/>
        <TouchableOpacity style={estilos.boton}>
          <Text style={estilos.texto}>Iniciar sesión</Text>
        </TouchableOpacity>
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
    justifyContent: 'center'
  },
  titulo: {
  marginBottom: "10px", 
  fontSize: '25px'
  },
  input: {
    width: "100%", 
    padding: "10px", 
    marginBottom: "10px", 
    borderColor: "#bee8dd", 
    borderWidth: 2, 
    borderRadius: 5, 
    fontSize: '15px'
  },
  boton: {
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    fontSize: '20px',
    borderWidth: 3,
    borderRadius: 5
  },
  texto: {
    fontSize: '20px',
  }
});
