'use strict';
import React,{ Component } from 'react';
import { Text,View,Button,StyleSheet,Image,TouchableOpacity,TouchableHighlight } from 'react-native';
import {StackNavigator,TabNavigator,TabBarTop} from 'react-navigation';

import MyBottomTab from './bottomTab';
import PlayScreen from './play';
import MusicalScreen from './musical';
import UserScreen from './user';
import Time from './time';


class RecentScreen extends Component{

    static navigationOptions = ({ navigation }) => {
        const {state, setParams} = navigation;
        const isInfo = state.params && state.params.mode === 'info';
        return {
            title: 'Recent page',
            headerBackTitle: 'back',
            headerTitleStyle: styles.headerTitleStyle,
            headerTintColor: '#e107f5',
            headerPressColorAndroid: '#e107f5',
            headerRight: (
                <TouchableHighlight>
                    <Text onPress={()=>setParams({mode : isInfo?'nono':'info'})}>
                    {isInfo ? 'info is show' : 'Done'}
                    </Text>
                </TouchableHighlight>
            ),
            headerLeft:(
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text style={styles.iconfont}>&#xe697;</Text>
                </TouchableOpacity>
            ),
            tabBarIcon: ({ tintColor }) => (
                <Image 
                    source = {require('../static/music.png')}
                    style = {[styles.icon, {tintColor: tintColor,width:50,height:50}]}
                 />
            ),
            tabBarLabel: 'recent22'
        };
    }
    render() {
        return (
            <Time/>
        )
    }
}
const styles = StyleSheet.create({

  iconfont: {
    //   color: '#ccc',
      fontFamily:'iconfont',
      fontSize: 30,
      alignItems: 'center',
      paddingLeft: 5
  },
  headerTitleStyle:{
      alignItems: 'center',
      paddingLeft: 30,
  }
});
const Tab = TabNavigator({
        Play: {screen: PlayScreen},
        Musical: {screen: MusicalScreen},
        User: {screen: UserScreen},
    },
    {
        tabBarComponent: MyBottomTab,
        tabBarPosition: 'bottom',
        tabBarOptions:{
            showIcon: true,
            showLabel: true,
            inactiveBackgroundColor: "#fcfcfc",
            inactiveTintColor: "#000",
            activeTintColor: "#f50707",
            activeBackgroundColor: "#e107f5"
        },
        backBehavior: 'none',
        animationEnabled: false,  
        swipeEnabled: false,     
    });
const App = StackNavigator({
        Main: {screen:Tab},
        Profile: {screen: RecentScreen}
    },{
        initialRouteName: 'Main',
        headerMode: 'screen',
});
export default App;