import React from 'react'
// import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/HomeScreen"
import Message from "../screens/MessageScreen"
import Moments from "../screens/MomentsScreen"
import Profile from "../screens/ProfileScreen"
import Settings from "../screens/SettingsScreen"
import { createDrawerNavigator } from "@react-navigation/drawer"

// Navigation Drawer that shows the side bar menu

const Appstack = () => {
    // const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen component={Home} name="Home" />
            <Drawer.Screen component={Message} name="Message" />
            <Drawer.Screen component={Moments} name="Moments" />
            <Drawer.Screen component={Profile} name="Profile" />
            <Drawer.Screen component={Settings} name="Settings" />
            
        </Drawer.Navigator>
    )
}

export default Appstack
