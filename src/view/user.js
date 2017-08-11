'use strict';
import React,{ Component } from 'react';
import { Text,View,TextInput,StyleSheet,Button,AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../action';

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
        <View style={styles.headTabContainer}>
            <Text style={styles.headTabLabel}> head tab</Text>
        </View>
    );
}
class UserScreen extends Component{
    static navigationOptions = {
        title: '节拍器',
        header: HeadTab, 
    };
    constructor(props){
        super(props);
        this.state={
            text: ''
        }
    }
    _get(){
        let value = AsyncStorage.getItem('text', (err,result)=>{
            if (err){
                console.log(err);
            }
            else{
                this.setState({text: result});
            }
        });
        console.log(value);
    }
    _save(){
        AsyncStorage.setItem('text', this.state.text, (err)=>{
            if (err)
                console.log(err);
        });
    }
    render(){
        console.log('user is render...');
        return (
            <View style={styles.container}>
                <Text> the musical.count is  : {this.props.count}</Text>
                <View style={{flexDirection:'row'}}>
                <Text>input：</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1,flex:1,paddingRight:20,padding:0}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    underlineColorAndroid="transparent"
                    keyboardType="numeric"
                    placeholderTextColor="#ccc"
                   
                />
                </View>
                <Text>the value is {this.state.text}</Text>
                <Button title='Save to local' color="#841584" onPress={()=>this._save()}></Button>
                <Button title='Get from local' color="#841584" onPress={()=>this._get()} style={{marginTop:20}}></Button>
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
    }
});

function mapStateToProps (state){
    let {musical} = state;
    return {
        count:musical.count
    }
}
function mapDispatchToProps (dispatch){
    return bindActionCreators({mincr:action.mincr,mdecr:action.mdecr}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen);