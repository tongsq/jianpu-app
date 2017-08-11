'use strict';
import React,{ Component } from 'react';
import { Text,View,Button,StyleSheet,Image,TouchableOpacity,TouchableHighlight } from 'react-native';
import {StackNavigator,TabNavigator,TabBarTop} from 'react-navigation';
import PropTypes from 'prop-types';

class TabButton extends Component{
    static propTypes = {
        source: PropTypes.number.isRequired,
        pressAction: PropTypes.func.isRequired,
        route: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
    }
    constructor(props){
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.props.isActive !== nextProps.isActive;
    }
    _onPress(){
        this.props.pressAction(this.props.route);
    }
    render(){
        return (
            <TouchableOpacity onPress={()=>this._onPress()} style={{flex:1}}>
                <View>
                {/*<Image source={this.props.source} style={[styles.tabbutton,this.props.isActive?{backgroundColor:"#e107f5"}:{}]}/>*/}
                <Text style={[styles.iconStyle,this.props.isActive?styles.iconActiveStyle : '']}>{this.props.isActive?this.props.iconActive : this.props.icon}</Text>
                <Text style={[styles.textStyle,this.props.isActive?styles.iconActiveStyle : '']}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
class BottomTab extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeTabButton: 'Play',
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        // console.log(this.props,this.state);
        return this.state.activeTabButton != nextState.activeTabButton;
    }
    componentDidMount(){

    }
    _pressAction(route){

        const navigation = this.props.navigation;
        const {navigate} = navigation;
        navigate(route);
        this.setState({activeTabButton:route});
    }
    render(){
        return (
            <View style={styles.tabbar}>
                <View style={{flex:0.5}}></View> 
                <TabButton 
                    icon='&#xe60b;'
                    iconActive='&#xe602;'
                    source={require('../static/music.png')} 
                    pressAction={()=>this._pressAction('Play')} 
                    route="Play" 
                    text="节 拍"
                    isActive={this.state.activeTabButton == "Play" ? true:false}
                />
                <TabButton 
                    icon='&#xe735;'
                    iconActive='&#xe736;'
                    source={require('../static/jianpu.png')} 
                    pressAction={()=>this._pressAction('Musical')} 
                    route="Musical" 
                    text="曲 谱"
                    isActive={this.state.activeTabButton == "Musical" ? true:false}
                /> 
                <TabButton 
                    icon='&#xe69d;'
                    iconActive='&#xe69d;'
                    source={require('../static/jianpu.png')} 
                    pressAction={()=>this._pressAction('User')} 
                    route="User" 
                    text="设 置"
                    isActive={this.state.activeTabButton == "User" ? true:false}
                />               
                <View style={{flex:0.5}}></View> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
  tabbar: {
      flexDirection: "row",
      //justifyContent: "space-around",
      justifyContent: "center",
      backgroundColor: "#fcfcfc",
      //borderBottomWidth: 1, borderBottomColor:"#ddd",
      borderTopWidth: 0.2, borderTopColor:"#b8b8b8",
      padding: 5,
  },
  tabbutton:{
      height:30,
      width:30
  },
  iconStyle: {
      color: '#999999',
      fontFamily:'iconfont',
      fontSize: 20,
      //alignItems: 'center',
      alignSelf: 'center',
      paddingTop: 2,
      paddingBottom: 2,
  },
  textStyle: {
      color: '#999999',
      fontSize: 12,
      //alignItems: 'center',
      alignSelf: 'center',

  },
  iconActiveStyle: {
      color: '#e107f5'
  }
});
export default BottomTab;