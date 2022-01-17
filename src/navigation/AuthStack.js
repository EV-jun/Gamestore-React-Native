import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "../screens/LoginScreen"
import Main from "../screens/MainScreen"

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen component={Main} name="Main" />
            <Stack.Screen component={LoginScreen} name="Login" />
            {/* <Stack.Screen component={HomeScreen} name="Home" /> */}
        </Stack.Navigator>
    )
}

export default AuthStack

