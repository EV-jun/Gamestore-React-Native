 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native'
 import { createNativeStackNavigator } from "@react-navigation/native-stack"
 import AuthStack from './src/navigation/AuthStack';
 import Appstack from './src/navigation/Appstack';

 const Stack = createNativeStackNavigator();
 
  const App = () => {
    return(
      <NavigationContainer>
        {/* <AuthStack /> */}
        <Appstack />
      </NavigationContainer>
    )
  }
 
 export default App;
 