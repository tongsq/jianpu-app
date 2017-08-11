'use strict';
import Sum,{i,j,sum} from './test_export';
import React,{ Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';

console.log(i);console.log(sum);console.log(Sum);
export default class extends Component{
    render(){
        let params = {i:i, j:j, add:sum};
        return (
            <View style={styles.main}>
            <Sum {...params} style={{alignSelf:'flex-start'}}/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});