'use strict';
import React,{ Component } from 'react';
import { Text,View,Button,StyleSheet,Image,NativeModules,StatusBar } from 'react-native';

const SplashScreen = NativeModules.SplashScreen;
class headTab extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Text> head tab</Text>
        );
    }
}
function HeadTab(props){
    return (
        // <View style={styles.headTabContainer}>
        //     <Text style={styles.headTabLabel}> head tab</Text>
        // </View>
        <View></View>
    );
}
export default class PlayScreen extends Component{
    static navigationOptions = {
        title: '节拍器',
        header: HeadTab,
    };
    componentDidMount(){
        SplashScreen.hide();
    }
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View>
                <StatusBar
                backgroundColor="rgba(88,88,88,0.6)"
                barStyle="light-content"
                animated={true}
                translucent={false}
                showHideTransition="fade"
                height="0"
                hidden={false}
                />
                <View>
                    <Text>首页</Text>
                    <Button
                        title="Go to Jane's profile"
                        onPress={()=>navigate('Profile', {name: 'Jane'})}
                    />
                    <Image source={require('../static/logo.svg')} style={styles.logo}/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#e107f5',
        backgroundColor: '#ffffff',
        justifyContent: 'center',

    },
    headTabContainer: {
        //flex: 1,
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#393a3f',
        borderTopWidth: 0.2, 
        borderTopColor:"#b8b8b8",
    },
    headTabLabel: {
        color: '#ffffff',
        fontSize: 20,
    },
    logo:{
        //animation: 'App-logo-spin infinite 20s linear'
    }
});