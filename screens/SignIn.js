import React from "react";
import {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDragon  } from '@fortawesome/free-solid-svg-icons/faDragon';
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState({
      email: "",
      emailError: ""
    });

    const [password, setPassword] = useState({
      password: "",
      passwordError: ""
    });
    
    const emailValidator = () => {
      if (email.email == "" || email.email == undefined) {
        setEmail({...email, emailError: "Debe introducir un correo para continuar." });
      } else {
        setEmail({...email, emailError: "" });
      }
    };
    const passwordValidator = () => {
      if (password.password == "" || password.password == undefined) {
        setPassword({...password, passwordError: "Por favor, introduzca una contraseña." });
      } else {
        setPassword({...password, passwordError: "" });
      }
    };

    return(
        <View style={styles.container}>
            <View style={[styles.form, styles.shadowProp]}>
                <FontAwesomeIcon style={styles.icon} icon={ faDragon } size={25}/>
                <Text style={styles.title}>¡Bienvenido a mi aplicación!</Text>
                <TextInput label="Correo" style={styles.input} inputMode="text" placeholder="Correo electrónico" onChangeText={(text) => {setEmail({ email: text })}}/>
                <Text style={styles.error}>{email.emailError}</Text>
                <TextInput label="Contraseña" secureTextEntry style={styles.input} placeholder="Contraseña" onChangeText={(text) => {setPassword({ password: text })}}/>
                <Text style={styles.error}>{password.passwordError}</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{if (email.email != undefined && email.email != "" && password.password != undefined && password.password != "") {navigation.navigate('HomeTab');} else{emailValidator();passwordValidator();}}}>
                    <Text style={styles.txtbutton}>Iniciar sesión</Text>
                </TouchableOpacity>
                <Text style={styles.text}>¿Aún no tienes una cuenta?</Text>
                <Text style={styles.links} onPress={()=>{navigation.navigate('SignUp')}}>¡Regístrate!</Text>
            </View>
        </View>
    );
}

export default SignIn;

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
      fontSize: 16,
      fontFamily: 'Montserrat-Medium',
      marginBottom: 10,
      color: 'blue'
    },
    error: {
      fontSize: 12,
      fontFamily: 'Montserrat-Regular',
      marginBottom: 10,
      color: '#d30224'
    }
  });