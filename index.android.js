/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,View
} from 'react-native';
import setup from './setup';

//import setup from './src/view/time';
//import setup from './test/test_inport';
 //import setup from './test';
// import ART1 from './src/test/test_art';
// import ART2 from './src/test/test_art2';
// class setup extends Component{
//   render(){
//     return (
//       <View>
//         <ART1 />
//         <ART2 />
//       </View>
//     );
//   }
// }
AppRegistry.registerComponent('jianpu', () => setup);
