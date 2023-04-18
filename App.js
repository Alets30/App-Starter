import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faCloud} size="10x" style={{color: "#5398fb", marginBottom: "10px"} }/>
      <Text style={{marginBottom: "10px", fontSize: '25px'}}>¡Bienvenido a mi aplicación!</Text>
      <TextInput style={{width: "90%", padding: "10px", marginBottom: "10px", borderColor: "#bee8dd", borderWidth: 2, borderRadius: 5, fontSize: '15px'}} placeholder="Correo electrónico"/>
      <TextInput style={{width: "90%", padding: "10px", marginBottom: "10px", borderColor: "#bee8dd", borderWidth: 2, borderRadius: 5, fontSize: '15px'}} placeholder="Contraseña"/>
      <button style={{width: "90%", background: '#162749', padding: '10px'}} href="#">
      <Text style={{color: 'white', fontSize: '20px'}}>Iniciar sesión</Text>
      </button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
