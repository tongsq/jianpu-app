'use strict';
import React,{ Component } from 'react';
import { Text,View,Button,StyleSheet,Image,NativeModules,StatusBar,ART,Animated } from 'react-native';
import util from './utils';
//import Morth from '../test/test_art';

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
const path = ART.Path();
        path.moveTo(1, 1);
        path.lineTo(100,1);
        path.lineTo(50,50);
        //path.lineTo(1, 1);
        path.close();
        console.log(path);
        console.log(String(path));
class Arttest extends Component{
    constructor(props){
        super(props);
        this.state={
            opacity: new Animated.Value(0),
            deg: 0,
            isTranslate: false
        };
    }
    componentDidMount(){
        Animated.timing(
            this.state.opacity,
            {
                toValue:1
            }
        ).start();
        this.changeTranslateStatus();
    }
    componentWillUnmount(){
        if(this.state.isTranslate)
            this.changeTranslateStatus();
    }
    changeTranslateStatus(){
        
        if (this.state.isTranslate){
            clearInterval(this.intval);
            this.setState({isTranslate:false});
        }else{
            this.setState({isTranslate:true});
            this.intval = setInterval(()=>{
                let deg = this.state.deg+10;
                if(deg >= 360){
                    deg = 0;
                }
                this.setState({deg});
            },100);
        }
    }
    render(){
        const rect = ART.Path();
        rect.moveTo(1, 50);
        rect.arc(0, 99, 25);
        rect.arc(0, -99, 25);
        rect.close();
        const transform = ART.Transform().translate(10, 10).rotate(this.state.deg, 100, 1);
        return (
            <View>
                <Animated.Text style={{opacity:this.state.opacity}} onPress={()=>this.changeTranslateStatus()}>{this.state.isTranslate?'stop':'start'}</Animated.Text>
                <ART.Surface width={300} height={200}>
                    <ART.Group x={50} y={50}>
                    <ART.Shape d={path} stroke="#000" strokeWidth={1} strokeDash={[5,10]} fill="#892265" transform={transform}/>
                    <ART.Shape d={rect}  fill="#ccc"/>
                    </ART.Group>
                    <ART.Text strokeWidth={1} stroke="#000" font="bold 35px Heiti SC" path={new ART.Path().moveTo(100,100).lineTo(99,10)} >Swipe</ART.Text>
                </ART.Surface>
            </View>
        );
    }
}
class PlayScreen extends Component{
    static navigationOptions = {
        title: '节拍器',
        header: HeadTab,
    };
    componentDidMount(){
        //setTimeout(()=>SplashScreen.hide(), 2000);
        //SplashScreen.hide();
    }
    render(){
        console.log('play is render');
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
                    {/* <Text>首页</Text>
                    <Button
                        title="Go to Jane's profile"
                        onPress={()=>navigate('Profile', {name: 'Jane'})}
                    />
                    <Image source={require('../static/logo.png')} style={styles.logo}/> */}
                    <Arttest />
                </View>
                {/* <View>
                    <Morth />
                </View> */}
            </View>
        );
    }
}
export default class extends Component{
    render(){
        return <View><View style={{marginTop:20,flexDirection:'row'}}>
            <Text style={{backgroundColor:'#ccc',width:40}}>hello</Text>
            <Text style={{flex:1,backgroundColor:'#ccc'}}>world</Text>
            <Text>aaa</Text>
        </View>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Text style={styles.jianpuFont}>5</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1,alignItems:'center'}}><Text style={styles.jianpuFont}>3</Text></View>
                        <View style={{flex:1,alignItems:'center'}}><Text style={styles.jianpuFont}>5</Text></View>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Text style={styles.jianpuFont}>&#xe603;</Text>
                    </View>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Text style={styles.jianpuFont}>-</Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                    
                </View>
                <View style={{flex:1}}>
                    
                </View>
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    jianpuFont: {
      color: '#000',
      fontFamily:'jianpuiconfont',
      fontSize: 20,
      backgroundColor:'#ccc',
  },
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