import React from 'react';
import {View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity} from "react-native"
import Feather from "react-native-vector-icons/Feather"


const HomeScreen = () => {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor:"#fff"}}>
            <ScrollView style={{padding: 20}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                    <Text style={{fontSize:16}}>Hello John</Text>
                    <ImageBackground 
                        source={require("../assets/images/user-profile.jpg")}
                        style={{width: 35, height: 35}}  
                        imageStyle={{borderRadius: 25}}
                    />
                </View>

                <View style={{flexDirection: "row", borderColor: "#C6C6C6", borderWidth: 1, borderRadius:8, paddingHorizontal: 10, paddingVertical: 8}}>
                    <Feather name="search" color="#C6C6C6" style={{marginRight: 5}} />
                    <TextInput placeholder="search" />
                </View>

                <View style={{marginVertical: 15, flexDirection:"row", justifyContent: "space-between"}}>
                    <Text style={{fontSize: 16}}>Upcoming Games</Text>
                    <TouchableOpacity
                        onPress={() => {}}
                    >
                        <Text style={{color: "#0AADA8"}}>See all</Text>
                    </TouchableOpacity>
                </View>

                
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;