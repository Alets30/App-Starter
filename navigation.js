import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse  } from '@fortawesome/free-solid-svg-icons/faHouse';

//Screens
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();
const SignInStackNavigator = createNativeStackNavigator();

function MyTabs(){
    return(
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <FontAwesomeIcon color="#2b405c" size={30} icon={faHouse} />
                )}}/>
            <Tab.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            <Tab.Screen name="SignUp" component={SignUp} />
        </Tab.Navigator>
    );
}

function MyStack(){
    return(
        <SignInStackNavigator.Navigator initialRouteName="SignIn">
            <Tab.Screen name="HomeTab" component={MyTabs} options={{headerShown: false}}/>
            <Tab.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            <Tab.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        </SignInStackNavigator.Navigator>
    );
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}