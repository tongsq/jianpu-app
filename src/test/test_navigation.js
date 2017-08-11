//'use strict';
import React,{ Component } from 'react';
import { Text,View,Button,StyleSheet,Image,TouchableOpacity,TouchableHighlight } from 'react-native';
import {StackNavigator,TabNavigator,TabBarTop} from 'react-navigation';
import PropTypes from 'prop-types';

class MainScreen extends Component{
    static navigationOptions = {
        title: 'Welcome'
    };
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>list of all chats</Text>
                <Button
                    title="Go to Jane's profile"
                    onPress={()=>navigate('Profile', {name: 'Jane'})}
                />
            </View>
        );
    }
}
class ProfileScreen extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: `Hello ${navigation.state.params.name}`,
    });
    render(){
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>this is {params.name}'s page</Text>
            </View>
        );
    }
}
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
            <View style={{backgroundColor:"#fff"}}>
                <Text>List of recent chats</Text>
            </View>
        )
    }
}
class MyTabBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeTabButton: 'Recent',
        }
    }
    componentDidMount(){
        console.log(this.state);
        console.log(this.props);
    }
    _pressAction(route){

        console.log('80');
        console.log(this.props);
        console.log(route);
        const navigation = this.props.navigation;
        const {navigate} = navigation;
        navigate(route);
        this.setState({activeTabButton:route});
    }
    render(){
        return (
            <View style={styles.tabbar}>
                <TabButton source={require('../static/music.png')} pressAction={()=>this._pressAction('Recent')} route="Recent" isActive={this.state.activeTabButton == "Recent" ? true:false}/>
                <TabButton source={require('../static/jianpu.png')} pressAction={()=>this._pressAction('All')} route="All" isActive={this.state.activeTabButton == "All" ? true:false}/>
                <Text></Text>
                <Text></Text>
            </View>
        );
    }
}
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
        console.log(this.props);
        this.props.pressAction(this.props.route);
    }
    render(){
        console.log('render:'+this.props.route);
        return (
            <TouchableOpacity onPress={()=>this._onPress()}>
                <Image source={this.props.source} style={[styles.tabbutton,this.props.isActive?{backgroundColor:"#e107f5"}:{}]}/>
            </TouchableOpacity>
        );
    }
}
const Tab = TabNavigator({
        Recent: {screen: RecentScreen},
        All: {screen: MainScreen}
    },
    {
        tabBarComponent: MyTabBar,
        tabBarPosition: 'bottom',
        tabBarOptions:{
            showIcon: true,
            showLabel: true,
            inactiveBackgroundColor: "#fcfcfc",
            inactiveTintColor: "#000",
            activeTintColor: "#f50707",
            activeBackgroundColor: "#e107f5"
        }
    });
const App = StackNavigator({
    Main: {screen:Tab},
    Profile: {screen: ProfileScreen}
});

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
  tabbar: {
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#fcfcfc",
      //borderBottomWidth: 1, borderBottomColor:"#ddd",
      borderTopWidth: 1, borderTopColor:"#999999",
      padding: 5,
  },
  tabbutton:{
      height:30,
      width:30
  }
});
export default App;