/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import MaterialIcons from "react-native-vector-icons/MaterialIcons"
 import GamingImg from "./assets/gaming.svg"
 
 import {
   StyleSheet,
   View,
   Text,
   TouchableOpacity,
   SafeAreaView
 } from 'react-native';
 
 const App =() => {
   return (
     <SafeAreaView style={styles.safeArea}>
       <View>
         <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315f'}}>hmm</Text>
       </View>
       <GamingImg width={300} height={300} />
       <TouchableOpacity style={styles.actionBtn}>
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
   actionBtn: {
     backgroundColor: "#AD40AF",
     padding: 20,
     width: "90%",
     borderRadius: 5, 
     flexDirection: "row",
     justifyContent: "space-between",
   },
   actionBtnText: {
     fontWeight: "bold",
     fontSize: 18,
     color: "#fff",
     // fontFamily: "Roboto-MediumItalic"
   }
 });
 
 export default App;
 