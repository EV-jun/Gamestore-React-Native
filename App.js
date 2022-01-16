/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import MaterialIcons from "react-native-vector-icons/MaterialIcons"
 import GamingImg from "./src/assets/gaming.svg"
 import HomeScreen from "./src/screens/HomeScreen"
 
 import {
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   SafeAreaView
 } from 'react-native';

 import { NavigationContainer } from '@react-navigation/native'
 import { createNativeStackNavigator } from "@react-navigation/native-stack"

 const Stack = createNativeStackNavigator();
 
  const App = () => {
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name="Main" options={{headerShown:false}} />
        <Stack.Screen component={HomeScreen} name="Home" options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }


 const Main =({navigation}) => {
   return (
     <SafeAreaView style={styles.safeArea}>
       <View style={styles.title}>
         <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315f'}}>GameStore</Text>
       </View>
       <View style={styles.svgContainer}>
        <GamingImg width={300} height={300} style={{transform: [{rotate: '-15deg'}]}} />
       </View>
       <TouchableOpacity style={styles.actionBtn}
        onPress={() => navigation.navigate('Home')}
        >
         <Text style={styles.actionBtnText}>Let's Begin</Text>
         <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
       </TouchableOpacity>
     </SafeAreaView>
   )
 };
 
 const styles = StyleSheet.create({
   safeArea: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: "#fff"
   }, 
   title: {
    marginTop: 20
   },
   svgContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
   },
   actionBtn: {
     backgroundColor: "#AD40AF",
     padding: 20,
     width: "90%",
     borderRadius: 5, 
     flexDirection: "row",
     justifyContent: "space-between",
     marginBottom: 50
   },
   actionBtnText: {
     fontWeight: "bold",
     fontSize: 18,
     color: "#fff",
     // fontFamily: "Roboto-MediumItalic"
   }
 });
 
 export default App;
 