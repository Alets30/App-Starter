import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDragon  } from '@fortawesome/free-solid-svg-icons/faDragon';
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={[styles.form, styles.shadowProp]}>
                <FontAwesomeIcon style={styles.icon} icon={ faDragon } size={25}/>
                
                <Text style={styles.title}>Home</Text>
                <TouchableOpacity style={styles.button} >
                    <Text style={styles.txtbutton} onPress={()=>{navigation.navigate('SignIn')}}>Regresar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SignUp;

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