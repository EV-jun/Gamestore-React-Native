import React from 'react'
// import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/HomeScreen"
import Message from "../screens/MessageScreen"
import Moments from "../screens/MomentsScreen"
import Profile from "../screens/ProfileScreen"
import Settings from "../screens/SettingsScreen"
import { createDrawerNavigator } from "@react-navigation/drawer"
import CustomDrawer from '../components/CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons';

// Navigation Drawer that shows the side bar menu

const Appstack = () => {
    // const Stack = createNativeStackNavigator();
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator 
            drawerContent={props => <CustomDrawer {...props} />} 
            screenOptions={{
                headerShown: false, 
                drawerLabelStyle: {marginLeft: -25, fontSize: 15},
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
            }}
                
        >
            <Drawer.Screen 
                component={Home} 
                name="Home" 
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="home-outline" size={22} color={color} />
                    ),
                  }}
            />

            <Drawer.Screen 
                component={Message} 
                name="Message"
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
                    ),
                  }}
            />

            <Drawer.Screen
                component={Moments} 
                name="Moments" 
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="timer-outline" size={22} color={color} />
                    ),
                  }}
            />

            <Drawer.Screen 
                component={Profile} 
                name="Profile"
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="person-outline" size={22} color={color} />
                    ),
                  }}
            />

            <Drawer.Screen 
                component={Settings} 
                name="Settings" 
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                  }}
            />
            
        </Drawer.Navigator>
    )
}

export default Appstack
