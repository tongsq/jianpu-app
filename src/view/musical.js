'use strict';
import React,{ Component } from 'react';
import { Text,View,ListView,StatusBar,StyleSheet } from 'react-native';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as action from '../action';

class PartComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let value = this.props.value;
        console.log(value);
        let eachValue = [];
        eachValue = value.map((item,index)=>{
            console.log(index);
            index = 'part_' + index;
            if (item instanceof Array){
                let linePart = item.map((lineItem, lineItemIndex)=>{return (
                    <View style={{flex:1,alignItems:'center'}} key={{lineItemIndex}}>
                        <Text style={styles.jianpuFont}>{lineItem}</Text>
                    </View>
                );});
                return (
                    <View style={{flex:1,flexDirection:'row'}} key={index}>
                        {linePart}    
                    </View>
                );
            }else{
                return (<View style={{flex:1,flexDirection:'row'}} key={index}>
                        <Text style={styles.jianpuFont}>{item.toString()}</Text>
                    </View>)
                }
            });
        return (
            <View style={{flex:1,flexDirection:'row'}}>
                {eachValue}
            </View>
        );
    }
}
class MusicalScreen extends Component{
    static navigationOptions = {
        title: '节拍器'  
    }
    render(){
        let row = [['5',[3,5],"&#xe603;",'-'],[],[]];
        let partComponents = [];
        partComponents = row.map((item,index)=>{return (<PartComponent value={item} key={index}/>);});
        console.log(partComponents);
        return (
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
                {partComponents}
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
  container:{
    marginTop:20,
  },
  part:{
      flex:1,
  },
  jianpuFont: {
      color: '#000',
      fontFamily:'jianpuiconfont',
      fontSize: 30,
      //alignItems: 'center',
      //alignSelf: 'center',
      paddingTop: 2,
      paddingBottom: 2,
      //width:100,
      backgroundColor:'#ccc',
      //flexDirection:'row',
  }
});

function mapStateToProps (state){
    console.log(state);
    let {musical} = state;
    return {
        musical
    }
}
function mapDispatchToProps (dispatch){
    return bindActionCreators({mincr:action.mincr,mdecr:action.mdecr}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicalScreen);