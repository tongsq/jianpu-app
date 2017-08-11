'use strict';
import React,{ Component } from 'react';
import { Platform,ListView,StyleSheet,StatusBar,Text,TouchableHighlight,View } from 'react-native';

let i = 1;
let j = 2;

export {i, j}
function sum(i, j)
{
    return i + j;
}
export {sum}
export default class Sum extends Component{
    static defaultProps = {

    }
    static propTypes = {

    }
    constructor(props){
        console.log('Sum is constructor');
        super(props);
        this.state={result:"??"};
    }
    _click(){
        let result = this.props.add(this.props.i, this.props.j);
        console.log(result);
        this.setState({result: result});
    }
    render() {
        return (
            <View style={{flexDirection:"row",alignSelf:"flex-start"}}>
                <Text style={{fontSize:20}} onPress={()=>this._click()}>{this.props.i.toString()} + {this.props.j.toString()} = </Text>
                <Text style={{fontSize:20}}>{this.state.result.toString()}</Text>
            </View>
        )
    }
}

