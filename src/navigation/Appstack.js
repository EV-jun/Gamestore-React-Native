import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/HomeScreen"

const Appstack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen component={Home} name="Home" />
        </Stack.Navigator>
    )
}

export default Appstack
