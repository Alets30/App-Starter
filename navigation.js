import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const Tab = createBottomTabNavigator();
const SignInStackNavigator = createNativeStackNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={SignIn} options={{headerShown: false}}/>
            <Tab.Screen name="SignUp" component={SignUp} />
        </Tab.Navigator>
    );
}

function MyStack(){
    return(
        <SignInStackNavigator.Navigator>
            <Tab.Screen name="SignIn" component={SignIn} />
            <Tab.Screen name="SignUp" component={SignUp} />
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