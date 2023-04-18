import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faCloud} size="7x" style={{color: "#5398fb",} }/>
      <Text>¡Bienvenido a mi aplicación!</Text>
      <TextInput style={{width: "90%"}} placeholder="Correo electrónico"/>
      <TextInput style={{width: "90%"}} placeholder="Contraseña"/>
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
