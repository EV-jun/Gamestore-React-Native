import React from 'react';
import {View, Text, SafeAreaView, ScrollView, ImageBackground, TextInput, TouchableOpacity} from "react-native"
import Feather from "react-native-vector-icons/Feather"
import Carousel from "react-native-snap-carousel"
import { sliderData, paidGames, freeGames} from "../model/data"
import BannerSlider from "../components/BannerSlider"
import { windowWidth } from "../utils/Dimensions"
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';


const HomeScreen = ({navigation}) => {
    const [gamesTab, setGamesTab] = React.useState(1)


    const renderBanner = ({item, index}) => {
        return <BannerSlider data={item} />
    }

    const onSelectSwitch = (value) => {
        setGamesTab(value)
    }
    return(
        <SafeAreaView style={{flex: 1, backgroundColor:"#fff"}}>
            <ScrollView style={{padding: 20}}>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 20}}>
                    <Text style={{fontSize:16}}>Hello John</Text>
                    <TouchableOpacity onPress={
                        // () => navigation.goBack()
                        () => navigation.openDrawer()
                    } >
                        <ImageBackground 
                            source={require("../assets/images/user-profile.jpg")}
                            style={{width: 35, height: 35}}  
                            imageStyle={{borderRadius: 25}}
                        />
                    </TouchableOpacity>
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

                {/* Treat this like a map function */}
                <Carousel
                    ref={c => {
                        this._carousel = c;
                    }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={windowWidth - 40}
                    itemWidth={300}
                    loop={true}
                />

                <View style={{marginVertical: 20}}>
                    <CustomSwitch
                        selectionMode={1} 
                        option1={"Free to play"}
                        option2={"Paid games"}
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                {gamesTab == 1 && 
                    freeGames.map((game, i) => <ListItem 
                    key={game.id} 
                    photo={game.poster}
                    title={game.title}
                    subTitle={game.subtitle}
                    isFree={game.isFree}
                    onPress={() => navigation.navigate('GameDetails', {title: game.title})}
                    />)
                }
                {gamesTab == 2 && 
                    paidGames.map((game, i) => <ListItem 
                    key={game.id} 
                    photo={game.poster}
                    title={game.title}
                    subTitle={game.subtitle}
                    isFree={game.isFree}
                    price={game.price}
                    onPress={() => navigation.navigate('GameDetails', {title: game.title})}
                    />)
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;