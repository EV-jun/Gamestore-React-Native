import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../screens/HomeScreen"
import Cart from "../screens/CartScreen"
import Favorites from "../screens/FavoritesScreen"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import GameDetailsScreen from "../screens/GameDetailsScreen"
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GameDetails"
          component={GameDetailsScreen}
          options={({route}) => ({
            title: route.params?.title, // This line will show the title of the game on header
          })}
        />
      </Stack.Navigator>
    );
  };

const TabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {backgroundColor: '#AD40AF'},
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: 'yellow',
        }}>
            <Tab.Screen 
                name="Home2" 
                component={HomeStack}
                options={({route}) => ({
                    tabBarStyle: {
                        display: getTabBarVisibility(route),
                        backgroundColor: '#AD40AF',
                    },
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home-outline" color={color} size={size} />
                    ),
                    })}
            />
            <Tab.Screen 
                name="Cart" 
                component={Cart} 
                options={({route}) => ({
                    tabBarStyle: {
                        // display: getTabBarVisibility(route),
                        backgroundColor: '#AD40AF',
                    },
                    tabBarBadge: 3,
                    tabBarBadgeStyle: {backgroundColor: 'yellow'},
                    tabBarIcon: ({color, size}) => (
                        <Feather name="shopping-bag" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen 
                name="Favorites" 
                component={Favorites} 
                options={({route}) => ({
                    tabBarStyle: {
                        // display: getTabBarVisibility(route),
                        backgroundColor: '#AD40AF',
                    },
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="heart-outline" color={color} size={size} />
                    ),
                })}
            />
        </Tab.Navigator>
    )
}

// The sole purpose of this function is to return css for displaying the tab navigation
// If the user is currently looking at the game details page, we want to hide the navigation tab on the bottom
const getTabBarVisibility = route => {
    
    // This line below is responsible for getting the route name within the nested navigator
    // The reason we need to do that is because GameDetails stack is nested inside of HomeStack (scroll up and you'll see it)
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
    // console.warn(routeName);

    if(routeName == 'GameDetails') {
        return 'none';
    }
    return 'flex';
};

export default TabNavigator
