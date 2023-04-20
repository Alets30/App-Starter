import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Linking, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faDragon  } from '@fortawesome/free-solid-svg-icons/faDragon'

function SignIn({ navigation })
{
  return (
    <View style={styles.container}>
      <View style={[styles.form, styles.shadowProp]}>
        <FontAwesomeIcon style={styles.icon} icon={ faDragon } size={25}/>
        <Text style={styles.title}>¡Bienvenido a mi aplicación!</Text>
        <TextInput label="Correo" style={styles.input} placeholder="Correo electrónico" />
        <TextInput label="Contraseña" secureTextEntry style={styles.input} placeholder="Contraseña"/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.txtbutton}>Iniciar sesión</Text>
        </TouchableOpacity>
        <Text style={styles.text}>¿Aún no tienes una cuenta?</Text>
        <Text style={styles.links} onPress={() => navigation.navigate('SignUp')}>¡Regístrate!</Text>
      </View>
    </View>
  );
}

function SignUp({ navigation })
{
  return (
    <View style={styles.container}>
      <View style={[styles.form, styles.shadowProp]}>
        <FontAwesomeIcon style={styles.icon} icon={ faDragon } size={25}/>
        <Text style={styles.title}>Registro</Text>
        <TextInput label="Nombre" style={styles.input} placeholder="Nombre" />
        <TextInput label="Apellidos" style={styles.input} placeholder="Apellidos" />
        <TextInput label="Correo" style={styles.input} placeholder="Correo electrónico" />
        <TextInput label="Contraseña" secureTextEntry style={styles.input} placeholder="Contraseña"/>
        <TextInput label="Repita la contraseña" secureTextEntry style={styles.input} placeholder="Repita la contraseña"/>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.txtbutton}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf')
  })

  if(!fontsLoaded)
    return null;
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6efed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginVertical: 10
  },
  shadowProp: {
    shadowColor: "#2b405c",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 3,
    elevation: 4,
  },
  icon: {
    color: '#2b405c'
  },
  title: {
  marginBottom: 10, 
  fontSize: 25,
  textAlign: 'center',
  fontFamily: 'Montserrat-Black',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 10,
    color: '#000'
  },
  input: {
    width: "100%", 
    padding: 10, 
    marginBottom: 10, 
    borderColor: "#15546d", 
    borderWidth: 2, 
    borderRadius: 5, 
    fontSize: 15,
    fontFamily: 'Montserrat-Medium'
  },
  button: {
    width: '80%',
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#0aa4a0',
    borderColor: '#15546d'
  },
  txtbutton: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  links: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 10,
    color: 'blue'
  }
});